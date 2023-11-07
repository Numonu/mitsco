#!/usr/bin/env node

import fs from 'fs';
import inquirer from 'inquirer';
import { exec } from 'child_process';
import configuration from './static/configuration.js';
import chalk from 'chalk';
import getStyle from './utils/getStyle.js';

//--------------------assigning local configuration


try {
    const {style , types} = JSON.parse(fs.readFileSync("./mitsco.json" , "utf-8"));

    if(style) configuration.style = style;
    if(types) configuration.types = types;

} catch {
    /*no custom configuration found*/
}


//--------------------defining the configuration steps

const typeChoices = configuration.types.map(e => `${e.type} : ${e.description}`);

const questions = [
    {
        type: "list",
        name: "type",
        message: "Select a commit type:",
        choices : typeChoices,
    },
    {
        type: "input",
        name: "message",
        message: "Add message:",
    },
    {
        type: "confirm",
        name: "question",
        message: "Are you sure you want to commit?",
    },
];


//--------------------obtaining the data and executing the commit


inquirer.prompt(questions).then((answers) => {
    //-------prepare commit info

    const type = answers.type.split(" ")[0];
    const message = answers.message;

    //-------optional exit

    if(!answers.question) return;

    //-------execute git commit

    const commitMessage = getStyle(type , message , configuration.style);
    exec(`git commit -m "${commitMessage}"`, (error, stdout, stderr) => {
        if (error) {
            console.log(chalk.bgRed("¡The commit has failed!"));
            console.log(chalk.black.bgYellow("Typical reasons for error:"));
            console.log(chalk.yellow("  - git repository not started"));
            console.log(chalk.yellow("  - no items tracked for commit"));
            console.log(chalk.bgRed("Original error message:"));
            console.log(chalk.red(error))
            return;
        }
        console.log(stdout);
    });
});
