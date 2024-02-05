import process from "process";
import { getUserName } from "./userName.js";

function App() {
  console.log(`Welcome to the File Manager, ${getUserName()}!`);
  process.stdin.on("data", (data) => {
    const command = data.toString().trim();
    if (command === ".exit") {
      console.log(
        `Thank you for using File Manager, ${getUserName()}, goodbye!`
      );
      process.exit();
    }
  });

  process.on("SIGINT", () => {
    console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
    process.exit();
  });
}

App();
