import fs from "fs/promises";

export const getWorkDirectory = () => {
  process.stdout.write(
    `You are currently in ${process.cwd()}, enter your command >`
  );
};

export function up(args) {
  if (args.length === 0) {
    process.chdir("..");
  } else {
    console.log(`command 'up' dont have arguments`);
  }
}

export function cd(args) {
  try {
    if (args.length === 0 || args.length > 1) {
      console.log(`command 'cd' must have one argument(path)`);
    } else {
      process.chdir(...args);
    }
  } catch (e) {
    console.log(e.message);
  }
}

export async function ls(args) {
  if (args.length === 0) {
    try {
      const elements = await fs.readdir(process.cwd(), {
        withFileTypes: true,
        encoding: "utf8",
      });
      const files = [];
      const folders = [];
      elements.map((el) => {
        if (el.isFile()) {
          files.push({ name: el.name, type: "file" });
        } else {
          folders.push({ name: el.name, type: "folder" });
        }
      });
      const sortElements = [...folders.sort(), ...files.sort()];
      console.table(sortElements);
    } catch (e) {
      console.log(e.message);
    }
  } else {
    console.log(`command 'ls' dont have arguments`);
  }
}
