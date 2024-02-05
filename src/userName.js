export function getUserName() {
  const name = process.argv.find((el) => el.includes("username")).split("=")[1];
  if (!name) {
    return "unknown user";
  }
  return name;
}
