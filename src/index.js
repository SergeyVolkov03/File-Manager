import process from "process";
import { homedir } from "os";
import { getUserName } from "./userName.js";
import { getWorkDirectory } from "./navigation.js";
import { commands } from "./commands.js";

function App() {
  process.chdir(homedir());
  console.log(`Welcome to the File Manager, ${getUserName()}!`);
  getWorkDirectory();

  process.stdin.on("data", async (data) => {
    const commandline = data.toString().trim().split(" ");
    const command = commandline[0];
    const args = [...commandline.slice(1)];

    if (command in commands) {
      await commands[command](args);
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
