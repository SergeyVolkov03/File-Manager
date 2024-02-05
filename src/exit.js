import { getUserName } from "./userName.js";

export function exit(args) {
  if (args.length === 0) {
    console.log(
      `Thank you for using File Manager, ${getUserName()}, goodbye!`
    );
    process.exit();
  } else {
    console.log(`command '.exit' dont have arguments`);
  }
}
