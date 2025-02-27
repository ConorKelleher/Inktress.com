import { PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import * as fs from "fs";
import mime from "mime";
import Promise from "bluebird";

/* eslint-disable */
const bucketName = process.env.BUCKET_NAME;
const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
/* eslint-enable */

const s3Client = new S3Client({
  region: "eu-west-1",
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

const buildDir = "dist";
const cachedImagesFileName = "mediaUploadCache.json"

let oldCachedImages = {}
const newCachedImages = {}

const MediaExtensions = [".jpg", ".jpeg", ".png", ".gif", ".mp4"]

function newFileMatchesCache(fileKey, localFileSize, remoteFileSize = null) {
  const cacheFileSize = oldCachedImages[fileKey] && oldCachedImages[fileKey].size
  const sizesEqual = localFileSize === cacheFileSize && (!remoteFileSize || remoteFileSize === localFileSize)
  return sizesEqual && MediaExtensions.some((ext) => oldCachedImages[fileKey].projectPath.endsWith(ext))
}

async function uploadAllFilesInDirectory(directory) {
  return new Promise(function(resolveReadDir) {
    fs.readdir(directory, async function (err, items) {
      for(let i=0; i<items.length; i++) {
        const item = items[i]
        const builtPath = `${directory}/${item}`;
        const fileKey = builtPath.split(`${buildDir}/`)[1]
        await new Promise(function (resolveLStat) {
          fs.lstat(builtPath, async function (err, stats) {
            if (err) {
              console.error(err);
            } else {
              if (stats.isDirectory()) {
                await uploadAllFilesInDirectory(builtPath);
              } else {
                const fileSize = fs.statSync(builtPath).size
                if (newFileMatchesCache(fileKey, fileSize)) {
                  // console.log("Cache hit, not uploading", fileKey)
                  newCachedImages[fileKey] = oldCachedImages[fileKey]
                } else {
                  console.log("Cache miss, uploading", fileKey)
                  await new Promise(function (resolveReadFile) {
                    fs.readFile(builtPath, async function (err, data) {
                      if (err) {
                        console.error(err);
                      } else {
                        // S3 ManagedUpload with callbacks are not supported in AWS SDK for JavaScript (v3).
                        // Please convert to 'await client.upload(params, options).promise()', and re-run aws-sdk-js-codemod.
                        // S3 ManagedUpload with callbacks are not supported in AWS SDK for JavaScript (v3).
                        // Please convert to 'await client.upload(params, options).promise()', and re-run aws-sdk-js-codemod.
                        const uploadCommand = new PutObjectCommand({
                          Bucket: bucketName,
                          Key: fileKey,
                          Body: data,
                          ACL: "public-read",
                          ContentType: mime.getType(builtPath),
                        });
                        try {
                          const response = await s3Client.send(uploadCommand);
                          console.log(response);
                          newCachedImages[fileKey] = {
                            projectPath: builtPath,
                            size: fileSize,
                          }
                        } catch (err) {
                          console.error(err);
                        }
                        resolveReadFile()
                      }
                    });
                  })
                }
              }
            }
            resolveLStat()
          })
        });
      }
      resolveReadDir()
    });
  })
}

async function clearBucket() {
  const listCommand = new ListObjectsV2Command({ Bucket: bucketName });
  let hasMore = true;
  const files = [];

  while (hasMore) {
    const { Contents, IsTruncated, NextContinuationToken } = await s3Client.send(listCommand);
    if (Contents) {
      files.push(...Contents);
    }
    hasMore = IsTruncated;
    listCommand.input.ContinuationToken = NextContinuationToken;
  }

  await Promise.each(files, (item) => {
    const cachedUpload = oldCachedImages[item.Key]
    if (cachedUpload && fs.existsSync(cachedUpload.projectPath) && newFileMatchesCache(item.Key, fs.statSync(cachedUpload.projectPath).size, item.Size)) {
      // console.log("Cache hit, not deleting", item.Key)
      return Promise.resolve()
    }
    console.log("Cache miss, deleting", item.Key)
    var deleteParams = { Bucket: bucketName, Key: item.Key };
    const deleteCommand = new DeleteObjectCommand(deleteParams);
    return s3Client.send(deleteCommand);
  });
}

async function readCachedImages() {
  oldCachedImages = await new Promise((resolve) => {
    fs.readFile(cachedImagesFileName, "utf-8", async function (err, data) {
      let cache = {}
      try {
        cache = JSON.parse(data)
      } catch(e) {
        //
      }
      resolve(cache)
    })
  })
}
async function writeCachedImages() {
  await new Promise((resolve) => {
    fs.writeFile(cachedImagesFileName, JSON.stringify(newCachedImages, null, 2), function () {
      resolve()
    })
  })
}

async function push(dir) {
  await readCachedImages();
  await clearBucket();
  await uploadAllFilesInDirectory(dir);
  await writeCachedImages()
  // console.log(oldCachedImages)
}

push(buildDir);
