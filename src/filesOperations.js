import fs from "fs";
import { pipeline } from "stream/promises";
import { writeFile } from "fs/promises";
import path from "path";

export const cat = async (args) => {
  if (args.length === 0 || args.length > 1) {
    console.log(`command 'cat' must have one argument(path)`);
  } else {
    try {
      const stream = fs.createReadStream(...args, "utf8");
      await pipeline(stream, process.stdout, { end: false });
      console.log();
      stream.on("error", (err) => console.log(`Err: ${err}`));
    } catch (e) {
      console.log(e.message);
    }
  }
};

export const add = async (args) => {
  if (args.length === 0 || args.length > 1) {
    console.log(`command 'add' must have one argument(file name)`);
  } else {
    const filePath = path.join(process.cwd(), ...args);
    const exists = fs.existsSync(filePath);
    if (exists) {
      console.log("such a file already exists");
      return;
    }
    try {
      await writeFile(filePath, "");
      console.log("file exists");
    } catch (e) {
      console.log(e.message);
    }
  }
};
