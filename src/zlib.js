import { createBrotliCompress, createBrotliDecompress } from "zlib";
import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";

export const compress = async (args) => {
  if (args.length === 0 || args.length > 2) {
    console.log(
      `command 'compress' must have two arguments(path_to_file path_to_destination)`
    );
  } else {
    try {
      const filePath = path.resolve(process.cwd(), args[0]);
      const compresFilePath = path.resolve(process.cwd(), args[1]);
      const readStream = fs.createReadStream(filePath);
      const writeStream = fs.createWriteStream(compresFilePath);
      const zip = createBrotliCompress();
      await pipeline(readStream, zip, writeStream);
    } catch (e) {
      console.log(e.message);
    }
  }
};

export const decompress = async (args) => {
  if (args.length === 0 || args.length > 2) {
    console.log(
      `command 'decompress' must have two arguments(path_to_file path_to_destination)`
    );
  } else {
    try {
      const filePath = path.resolve(process.cwd(), args[0]);
      const decompressFilePath = path.resolve(process.cwd(), args[1]);
      const readStream = fs.createReadStream(filePath);
      const writeStream = fs.createWriteStream(decompressFilePath);
      const zip = createBrotliDecompress();
      await pipeline(readStream, zip, writeStream);
    } catch (e) {
      console.log(e.message);
    }
  }
};
