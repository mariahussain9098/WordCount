import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Please type your sentence for counting words"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(chalk.italic.magenta.bgYellow("Your text contains", chalk.bold.green(words.length), "words"));
