import process from "process";
import { homedir } from "os";
import { getUserName } from "./userName.js";
import { getWorkDirectory } from "./navigation.js";
import { commands } from "./commands.js";

function App() {
  process.chdir(homedir());
  console.log(`Welcome to the File Manager, ${getUserName()}!`);
  getWorkDirectory();

  process.stdin.on("data", (data) => {
    const command = data.toString().trim();
    if (command === ".exit") {
      console.log(
        `Thank you for using File Manager, ${getUserName()}, goodbye!`
      );
      process.exit();
    }
    if (command in commands) {
      commands[command]();
      getWorkDirectory();
    }
  });

  process.on("SIGINT", () => {
    console.log(
      `\nThank you for using File Manager, ${getUserName()}, goodbye!`
    );
    process.exit();
  });
}

App();
