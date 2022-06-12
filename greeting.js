export const greeting = () => {
  const array = process.argv.slice(2);
  let argname = array.find((element) => element.includes("username"));
  let index = argname.indexOf("=");
  let username = argname.substring(index + 1);
  return username
};
