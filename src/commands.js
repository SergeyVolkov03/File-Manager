import { exit } from "./exit.js";
import { cd, up } from "./navigation.js";

export const commands = {
  ".exit": exit,
  up: up,
  cd: cd,
};
