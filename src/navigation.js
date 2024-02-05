import { homedir } from "os";

const workDirectory = homedir();

export const getWorkDirectory = () => {
  process.stdout.write(`You are currently in ${workDirectory}, enter your command >`);
};
