import chalk from "chalk";
import boxen from "boxen";

export const showProtfolio = () => {
  const data = {
    name: chalk.bold.green("        Dhiraj Kumar"),
    work: chalk.bold.blue("Software Engineer"),
    github: chalk.gray("https://github.com/") + chalk.green("dhiraj2107"),
    linkedin:
      chalk.gray("https://linkedin.com/in/") +
      chalk.blue("dhiraj-kumar-3900a71a6"),
    npx: chalk.red("npx") + " " + chalk.white("dhiraj"),
    labelWork: chalk.white.bold("       Work:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
  };

  const me = boxen(
    [
      `${data.name}`,
      ``,
      `${data.labelWork}  ${data.work}`,
      `${data.labelGitHub}  ${data.github}`,
      `${data.labelLinkedIn}  ${data.linkedin}`,
      ``,
      `${data.labelCard}  ${data.npx}`,
      ``,
      `${chalk.italic("Building tools to make life easier for developers.")}`,
    ].join("\n"),
    {
      margin: 1,
      float: "center",
      padding: 1,
      borderStyle: "round",
      borderColor: "cyan",
    }
  );

  console.log(me);

  const tip = [
    `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
    "",
  ].join("\n");
  console.log(tip);
};

showProtfolio();
