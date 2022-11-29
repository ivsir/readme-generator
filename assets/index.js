// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message:"What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "projectName"
    },
    {
        type: "input",
        message: "Please write a short description of your project:",
        name: "shortDescription"
    },
    {
        type: "list",
        message:"What kind of license should your project have?",
        name: "license",
        choices: ["MIT","APACHE 2.0","GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message:"What are the steps required to install your project?",
        name: "installationSteps"
    },
    {
        type: "input",
        message:"What steps should be taken to run tests?",
        name: "testSteps"
    },
    {
        type: "input",
        message:"What does the user need to know about using the repo?",
        name: "repoUsage"
    },
    {
        type: "input",
        message:"What is the link to your webpage?",
        name: "livePage"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:\
        ```md\
        ![alt text](assets/images/screenshot.png)\
        ```",
        name: "screenshot"
    },
    {
        type: "input",
        message:"Who are the contributors for this repo?\
        ```md\
            e.g. John D, Jane D\
        ```",
        name: "repoCredits"
    },
    {
        type: "input",
        message:"If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
        name: "contributionInstructions"
    }
  ];

const generateLabel = (userInput) => {
    //answers.license
    if (userInput != "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${userInput.replace(" ","_")}-blue.svg)`
    }
    else {
        return ""
    }
}

const generateContributors = (userInput) => {

}
// TODO: Create a function to write README file
inquirer.prompt(questions).then((answers) => {
    const template = `# ${answers.projectName}

${generateLabel(answers.license)}

## Description
${answers.shortDescription}

## Table of Contents
<nav>
    <ol>
        <li><a href="#Installation">How to Use this Project</a></li>
        <li><a href="#Usage">Usage</a></li>
        <li><a href="#Credits">Credits</a></li>
        <li><a href="#License">License</a></li>
        <li><a href="#How to Contribute">How to Contribute</a></li>
        <li><a href="#Tests">Tests</a></li>
        <li><a href="#Questions">Questions</a></li>
    </ol>
</nav>

## Installation
${answers.installationSteps}

## Usage
<a href="${answers.livePage}">This is the link to my WebPage</a>
<p>${answers.repoUsage}</p>
<img src="${answers.screenshot}">

## Credits
${answers.repoCredits}

## License
This is an ${answers.license} license.

## How to Contribute
${answers.contributionInstructions}

## Tests
${answers.testSteps}

## Questions
<li>https://github.com/${answers.username} </li>
<li>Email: ${answers.email}</li>

`;

    fs.writeFile('./userREADME.md', template, () => {
        console.log(answers)
    } )
  });

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
