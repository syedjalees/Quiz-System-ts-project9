#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("\n\t\tTypescript Quiz Test\t\n"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.blue("\n\t Q1.What is Typescript primarily used for?? \t\n"),
        choices: ["Memory Management", "Dynamic Typing", "Static Typing", "none of these"]
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.blue("\n\t Q2.What are the three main `simple types` in typeScript?? \t\n"),
        choices: ["Boolean,Number,String", "Array,Object,Boolean", "String,number,array"]
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.blue("\n\t Q3.Which type of data is write 10 in inverted commas?? \t\n"),
        choices: ["string", "boolean", "number"]
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.blue("\n\t Q4.What are arrays in typeScript?? \t\n"),
        choices: ["container to store multiple data", "container to store a single data", "none of these"]
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.blue("\n\t Q5.shift method is used for what purpose.....?? \t\n"),
        choices: ["remove last element from array", "remove element from the start of an array", "replace element"]
    },
    {
        name: "question_6",
        type: "list",
        message: chalk.blue("\n\t Q6.Which command is valid to make pakage.json file?? \t\n"),
        choices: ["tsc init -y", "npm --init", "npm init -y"]
    },
    {
        name: "question_7",
        type: "list",
        message: chalk.blue("\n\t Q7.inquirers are used for ?? \t\n"),
        choices: ["make array", "take input from a user", "make a file"]
    },
    {
        name: "question_8",
        type: "list",
        message: chalk.blue("\n\t Q8.tsc --init is used for make a file of ?? \t\n"),
        choices: ["typescript", "ts config", "javascript"]
    },
    {
        name: "question_9",
        type: "list",
        message: chalk.blue("\n\t Q9.In Typescript, which symbol is commonly used to terminate a statement?? \t\n"),
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_10",
        type: "list",
        message: chalk.blue("\n\t Q10.Which method of Inquirer.js is used to start the prompt interface and receive user input?? \t\n"),
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
const total_score = 10;
switch (quiz.question_1) {
    case "Static Typing":
        console.log(chalk.green("\n\tQuestion number 1 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("Question number 1 is incorrect"));
}
switch (quiz.question_2) {
    case "Boolean,Number,String":
        console.log(chalk.green("\n\tQuestion number 2 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("Question number 2 is incorrect"));
}
switch (quiz.question_3) {
    case "string":
        console.log(chalk.green("\n\tQuestion number 3 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("Question number 3 is incorrect"));
}
switch (quiz.question_4) {
    case "container to store multiple data":
        console.log(chalk.green("\n\tQuestion number 4 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("Question number 4 is incorrect"));
}
switch (quiz.question_5) {
    case "remove element from the start of an array":
        console.log(chalk.green("\n\tQuestion number 5 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("Question number 5 is incorrect"));
}
switch (quiz.question_6) {
    case "npm init -y":
        console.log(chalk.green("\n\tQuestion number 6 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("Question number 6 is incorrect"));
}
switch (quiz.question_7) {
    case "take input from a user":
        console.log(chalk.green("\n\tQuestion number 7 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("Question number 7 is incorrect"));
}
switch (quiz.question_8) {
    case "ts config":
        console.log(chalk.green("\n\tQuestion number 8 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("Question number 8 is incorrect"));
}
switch (quiz.question_9) {
    case ";":
        console.log(chalk.green("\n\tQuestion number 9 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("Question number 9 is incorrect"));
}
switch (quiz.question_10) {
    case "prompt()":
        console.log(chalk.green("\n\tQuestion number 10 is correct\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.red("Question number 10 is incorrect"));
}
if (score == total_score) {
    console.log(chalk.yellow(`Congratulations Your Score is : ${score}/${total_score}`));
}
else {
    console.log(chalk.yellow(`\nYour Score is : ${score}/${total_score}`));
}
