import * as readline from "readline";
import { printCurrentPath } from "./currentPath.js";
import { greeting } from "./greeting.js";
import os from "os";
import { changeDirectory, getList, up } from "./navigation.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let username = greeting();
console.log(`Welcome to the File Manager, ${username}!`);
process.chdir(os.homedir());

printCurrentPath();
rl.on("line", function (line) {
  const command = line.split(" ")[0];

  switch (command) {
    case ".exit":
      console.log(`Thank you for using File Manager, ${username}!`);
      rl.close();
      break;
    case "up":
      up();
      break;
    case "cd":
      changeDirectory(line);
      break;
    case "ls":
      getList();
      break;
    default:
      console.log("Invalid input");
  }

  printCurrentPath();
});

rl.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${username}!`);
  process.exit();
});
