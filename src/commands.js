import { exit } from "./exit.js";
import { cd, ls, up } from "./navigation.js";

export const commands = {
  ".exit": exit,
  up: up,
  cd: cd,
  ls: ls,
};
