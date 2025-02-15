import * as fs from "fs";
import * as util from "util";
import Promise from "bluebird";
import sharp from "sharp";
import { encode } from "blurhash";
import getMediaDimensions from "get-media-dimensions"
// import { createCanvas, Image } from "canvas";

// import imageSize from "image-size";
// import getVideoDimensions from "get-video-dimensions"

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
// const getImageDimensions = util.promisify(imageSize)

const sizeOf = async (filePath) => {
  return await getMediaDimensions(filePath, filePath.endsWith(".mp4") ? "video" : "image")
}
// const sizeOf = (filePath) => {
//   return filePath.endsWith(".mp4")
//     ? getVideoDimensions(filePath)
//     : getImageDimensions(filePath);
// }

const portfolioDir = "src/assets/images/portfolio";
const portfolioItemsPath = "src/constants/PortfolioItems.tsx";
const IMPORTS_LIST_GEN_START = "// GENERATED PORTFOLIO ITEM IMPORTS START - DO NOT CHANGE THIS LINE";
const IMPORTS_LIST_GEN_END = "// GENERATED PORTFOLIO ITEM IMPORTS END - DO NOT CHANGE THIS LINE";
const KEYS_LIST_GEN_START = "// GENERATED PORTFOLIO ITEM KEYS START - DO NOT CHANGE THIS LINE";
const KEYS_LIST_GEN_END = "// GENERATED PORTFOLIO ITEM KEYS END - DO NOT CHANGE THIS LINE";
const ITEMS_LIST_GEN_START = "// GENERATED PORTFOLIO ITEMS START - DO NOT CHANGE THIS LINE";
const ITEMS_LIST_GEN_END = "// GENERATED PORTFOLIO ITEMS END - DO NOT CHANGE THIS LINE";

const replaceImportsRegExp = new RegExp(`${IMPORTS_LIST_GEN_START}.*${IMPORTS_LIST_GEN_END}`, "s"); // s flag to allow period to match newlines
const replaceKeysRegExp = new RegExp(`${KEYS_LIST_GEN_START}.*${KEYS_LIST_GEN_END}`, "s"); // s flag to allow period to match newlines
const replaceItemsRegExp = new RegExp(`${ITEMS_LIST_GEN_START}.*${ITEMS_LIST_GEN_END}`, "s"); // s flag to allow period to match newlines

// When we find a thumbnail before finding the full one, stick it here till we're ready for it
const tempThumbnailData = {};
let imageData = {};
let imageKeys = {};
const imageImports = [];

const BLUR_HASH_SIZE = 32;

const encodeImageToBlurhash = (path) =>
  new Promise((resolve, reject) => {
    sharp(path)
      .raw()
      .ensureAlpha()
      .resize(BLUR_HASH_SIZE, BLUR_HASH_SIZE, { fit: "fill" })
      .toBuffer((err, buffer, { width, height }) => {
        if (err) return reject(err);
        resolve(encode(new Uint8ClampedArray(buffer), width, height, 9, 9));
      });
  });

const JSONSort = (json) => {
  const newJson = {}
  Object.keys(json).sort().forEach((jsonKey) => newJson[jsonKey] = json[jsonKey])
  return newJson
}

async function processPortfolio() {
  const portfolioPages = await readdir(portfolioDir);
  for (let i = 0; i < portfolioPages.length; i++) {
    const portfolioPage = portfolioPages[i];
    const builtPagePath = `${portfolioDir}/${portfolioPage}`;
    const portfolioImages = await readdir(builtPagePath);
    for (let j = 0; j < portfolioImages.length; j++) {
      const portfolioImageName = portfolioImages[j];
      const [imageName, imageExtension] = portfolioImageName.split(/ ?[LS]?\./);
      const fileNameWithoutExtension = portfolioImageName.replace(new RegExp(`${imageExtension}$`), '').slice(0, -1)
      const isThumb = portfolioImageName.endsWith(` S.${imageExtension}`);
      const builtImagePath = `${builtPagePath}/${portfolioImageName}`;
      const imageKey = imageName
        .split(" ")
        .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
        .join("")
        .replace(/[^A-Za-z0-9&]/g, "");
      const importVariableKey = imageKey.replace(/[^A-Za-z]/g, "")
      const addThumbnailImport = () => {
        imageImports.push(`import ${importVariableKey}Thumb from "src/assets/images/portfolio/${portfolioPage}/${imageName} S.${imageExtension}"`)
      }
      if (isThumb) {
        if (imageData[imageKey]) {
          imageData[imageKey].thumbnailURL = `${importVariableKey}Thumb`
          addThumbnailImport()
        }
        continue;
      }
      const { height, width } = await sizeOf(builtImagePath);
      const imgBlurHash = imageExtension === "mp4" ? undefined : await encodeImageToBlurhash(builtImagePath);
      const hasThumbnail = !!tempThumbnailData[imageKey]
      imageImports.push(`import ${importVariableKey}Full from "src/assets/images/portfolio/${portfolioPage}/${fileNameWithoutExtension}.${imageExtension}"`)
      if (hasThumbnail) {
        addThumbnailImport()
      }

      imageData[imageKey] = {
        page: portfolioPage,
        blurHash: imgBlurHash,
        imageURL: `${importVariableKey}Full`,
        name: imageName,
        height,
        width,
      };
      imageKeys[imageKey] = imageKey;
    }
  }
  imageKeys = JSONSort(imageKeys)
  imageData = JSONSort(imageData)
}

async function writePortfolioData() {
  const originalFileString = await readFile(portfolioItemsPath, "utf-8");
  const imageImportsString = imageImports.join("\n");
  const imageKeysJSONString = JSON.stringify(imageKeys, null, 2);
  const trimmedImageKeysJSONString = imageKeysJSONString.slice(2, -2);
  const imageDataJSONString = JSON.stringify(imageData, null, 2);
  const trimmedImageDataJSONString = imageDataJSONString.slice(2, -2);
  // Note - the replace 2nd arg NEEDS to be functions, to circumvent special character replacement (https://stackoverflow.com/a/59697678)
  const updatedFileString = originalFileString
    .replace(
      replaceImportsRegExp,
      () => `${IMPORTS_LIST_GEN_START}\n${imageImportsString}\n${IMPORTS_LIST_GEN_END}`
    )
    .replace(replaceKeysRegExp, () => `${KEYS_LIST_GEN_START}\n${trimmedImageKeysJSONString}\n  ${KEYS_LIST_GEN_END}`)
    .replace(
      replaceItemsRegExp,
      () => `${ITEMS_LIST_GEN_START}\n${trimmedImageDataJSONString}\n  ${ITEMS_LIST_GEN_END}`
    )
    .replace(
      /("imageURL": )"([^"]+)"/g,
      "$1$2"
    ).replace(
      /("thumbnailURL": )"([^"]+)"/g,
      "$1$2"
    )

  await writeFile(portfolioItemsPath, updatedFileString);
}

async function buildPortfolio() {
  await processPortfolio();
  await writePortfolioData();
}

buildPortfolio();
