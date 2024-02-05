export const getWorkDirectory = () => {
  process.stdout.write(
    `You are currently in ${process.cwd()}, enter your command >`
  );
};

export function up(args) {
  if (args.length === 0) {
    process.chdir("..");
  } else {
    console.log(`command 'up' dont have arguments`);
  }
}

export function cd(args) {
  try {
    if (args.length === 0 || args.length > 1) {
      console.log(`command 'cd' must have one argument(path)`);
    } else {
      process.chdir(...args);
    }
  } catch (e) {
    console.log(e.message);
  }
}
