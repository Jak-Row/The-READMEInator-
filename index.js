// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    "Provide the project title: ",
    "Provide a description of the project: ", 
    "Provide instructions on proper installation: ", 
    "provide usage information: ", 
    "Provide contribution guidelines: ", 
    "Provide test instructions: ",
    "Select a license: ",
    "Provide a GitHub username: ",
    "Provide an email address: "
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        err ? console.log(err) : console.log('README.md created')
    })
}


// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'projTitle',
                message: (questions[0]),
            },
            {
                type: 'input',
                name: 'projDesc',
                message: (questions[1]),
            },
            {
                type: 'input',
                name: 'instalInstruc',
                message: (questions[2]),
            },
            {
                type: 'input',
                name: 'useInfo',
                message: (questions[3]),
            },
            {
                type: 'input',
                name: 'contGuide',
                message: (questions[4]),
            },
            {
                type: 'input',
                name: 'testInstruct',
                message: (questions[5]),
            },
            {
                type: 'checkbox',
                message: (questions[6]),
                name: 'license',
                choices: ['GNU GPLv3', 'Mozilla public License 2.0', 'Apache License 2.0', 'MIT License', 'The Unlicense', 'None'],
            },
            {
                type: 'input',
                name: 'gitHub',
                message: (questions[7]),
            },
            {
                type: 'input',
                name: 'eMail',
                message: (questions[8]),
            },
        ])
        .then((data) => {
            const readMe = `
            # ${data.projTitle}

            ## Description

            ${data.projDesc}

            ## Installation

            ${data.instalInstruc}

            ## Usage

            ${data.useInfo}

            ## License
            
            ${data.license}

            ## How to Contribute

            ${data.contGuide}

            ## Tests

            ${data.testInstruct}

            ## Contact Information

            GitHub: ${data.gitHub}
            Email:  ${data.eMail}
            
            `;

            writeToFile(readMe);
        });
}

// Function call to initialize app
init();
