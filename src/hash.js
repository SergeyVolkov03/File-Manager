import fs from "fs";
import path from "path";
import { createHash } from "crypto";
import { pipeline } from "stream/promises";

export const hash = async (args) => {
  if (args.length === 0 || args.length > 1) {
    console.log(`command 'hash' must have one argument(path_to_file)`);
  } else {
    try {
      const pathToFile = path.resolve(process.cwd(), args[0]);
      const stream = fs.createReadStream(pathToFile, "utf8");
      const hash = createHash("sha256");
      await pipeline(stream, hash);
      console.log(hash.digest("hex"));
      stream.on("error", (err) => console.log(`Err: ${err}`));
    } catch (e) {
      console.log(e.message);
    }
  }
};
