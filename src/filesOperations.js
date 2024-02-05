import str from "stream/promises";
import fs from "fs";

export const cat = async (args) => {
  if (args.length === 0 || args.length > 1) {
    console.log(`command 'cat' must have one argument(path)`);
  } else {
    try {
      const stream = fs.createReadStream(...args, "utf8");
      await str.pipeline(stream, process.stdout, { end: false });
      console.log();
      stream.on("error", (err) => console.log(`Err: ${err}`));
    } catch (e) {
      console.log(e.message);
    }
  }
};
