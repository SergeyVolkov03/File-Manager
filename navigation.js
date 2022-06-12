import fs from "fs";

export const up = () => {
  process.chdir("..");
};

export const changeDirectory = (line) => {
  if (!fs.existsSync(line)) {
    console.log("Operation failed");
    return;
  }
  process.chdir(line.split(" ")[1]);
};

export const getList = () => {
  console.log(...fs.readdirSync(process.cwd()).map((e) => e + "\n"));
};
