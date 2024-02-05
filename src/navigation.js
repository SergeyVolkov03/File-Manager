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
