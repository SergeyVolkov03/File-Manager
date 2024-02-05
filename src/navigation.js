export const getWorkDirectory = () => {
  process.stdout.write(
    `You are currently in ${process.cwd()}, enter your command >`
  );
};

export function up() {
  process.chdir("..");
}
