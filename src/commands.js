import { exit } from "./exit.js";
import { add, cat } from "./filesOperations.js";
import { cd, ls, up } from "./navigation.js";

export const commands = {
  ".exit": exit,
  up: up,
  cd: cd,
  ls: ls,
  cat: cat,
  add: add,
};
