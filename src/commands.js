import { exit } from "./exit.js";
import { add, cat, cp, mv, rm, rn } from "./filesOperations.js";
import { hash } from "./hash.js";
import { cd, ls, up } from "./navigation.js";
import { os } from "./os.js";
import { compress, decompress } from "./zlib.js";

export const commands = {
  ".exit": exit,
  up: up,
  cd: cd,
  ls: ls,
  cat: cat,
  add: add,
  rn: rn,
  cp: cp,
  rm: rm,
  mv: mv,
  os: os,
  hash: hash,
  compress: compress,
  decompress: decompress,
};
