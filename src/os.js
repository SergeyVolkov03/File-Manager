import { EOL, cpus, homedir, userInfo, arch } from "os";

export function os(args) {
  if (args.length === 0 || args.length > 1) {
    console.log(`command 'os' must have one argument`);
    return;
  }

  if (args[0] === "--EOL") {
    const result = EOL === "\r\n" ? "\\r\\n" : "\\n";
    console.log(`OS End-Of-Line is ${result}`);
    return;
  }

  if (args[0] === "--cpus") {
    console.log(
      cpus().map((cpu) => {
        return {
          model: cpu.model.trim(),
          clock_rate: `${cpu.speed / 1000} GHz`,
        };
      })
    );
    return;
  }

  if (args[0] === "--homedir") {
    console.log(homedir());
    return;
  }

  if (args[0] === "--username") {
    console.log(userInfo().username);
    return;
  }

  if (args[0] === "--architecture") {
    console.log(arch());
    return;
  }

  console.log(
    `command 'os' must have one argument(--EOL, --cpus, --homedir, --username or --architecture)`
  );
}
