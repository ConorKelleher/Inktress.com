import * as fs from "fs";
import * as util from "util";
import Promise from "bluebird";
import sharp from "sharp";
import { encode } from "blurhash";
// import { createCanvas, Image } from "canvas";

import imageSize from "image-size";

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const sizeOf = util.promisify(imageSize);

const portfolioDir = "src/assets/images/portfolio";
const portfolioItemsPath = "src/constants/PortfolioItems.tsx";
const KEYS_LIST_GEN_START = "// GENERATED PORTFOLIO ITEM KEYS START - DO NOT CHANGE THIS LINE";
const KEYS_LIST_GEN_END = "// GENERATED PORTFOLIO ITEM KEYS END - DO NOT CHANGE THIS LINE";
const ITEMS_LIST_GEN_START = "// GENERATED PORTFOLIO ITEMS START - DO NOT CHANGE THIS LINE";
const ITEMS_LIST_GEN_END = "// GENERATED PORTFOLIO ITEMS END - DO NOT CHANGE THIS LINE";

let imageData = {};
let imageKeys = {};

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
      const [imageName, imageExtension] = portfolioImageName.split(/ [LS]\./);
      const isThumb = portfolioImageName.endsWith(` S.${imageExtension}`);
      if (isThumb) {
        // currently, not doing anything with thumbnails - just seeing they exist and moving on
        continue;
      }
      const builtImagePath = `${builtPagePath}/${portfolioImageName}`;

      //todo - promise.all these
      const { height, width } = await sizeOf(builtImagePath);
      const imgBlurHash = await encodeImageToBlurhash(builtImagePath);
      const imageKey = imageName
        .split(" ")
        .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
        .join("")
        .replace(/[^A-Za-z0-9&]/g, "");
      imageData[imageKey] = {
        page: portfolioPage,
        name: imageName,
        blurHash: imgBlurHash,
        extension: imageExtension,
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
  const imageKeysJSONString = JSON.stringify(imageKeys, null, 2);
  const trimmedImageKeysJSONString = imageKeysJSONString.slice(2, -2);
  const imageDataJSONString = JSON.stringify(imageData, null, 2);
  const trimmedImageDataJSONString = imageDataJSONString.slice(2, -2);
  const replaceKeysRegExp = new RegExp(`${KEYS_LIST_GEN_START}.*${KEYS_LIST_GEN_END}`, "s"); // s flag to allow period to match newlines
  const replaceItemsRegExp = new RegExp(`${ITEMS_LIST_GEN_START}.*${ITEMS_LIST_GEN_END}`, "s"); // s flag to allow period to match newlines
  // Note - the replace 2nd arg NEEDS to be functions, to circumvent special character replacement (https://stackoverflow.com/a/59697678)
  const updatedFileString = originalFileString
    .replace(replaceKeysRegExp, () => `${KEYS_LIST_GEN_START}\n${trimmedImageKeysJSONString}\n  ${KEYS_LIST_GEN_END}`)
    .replace(
      replaceItemsRegExp,
      () => `${ITEMS_LIST_GEN_START}\n${trimmedImageDataJSONString}\n  ${ITEMS_LIST_GEN_END}`
    );
  await writeFile(portfolioItemsPath, updatedFileString);
}

async function buildPortfolio() {
  await processPortfolio();
  await writePortfolioData();
}

buildPortfolio();
