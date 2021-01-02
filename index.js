const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown');
const questions = require('./utils/questions');


// function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Yo it worked dawg! README.md printed!');
    });
}

// function to initialize program
const init = () => {
    inquirer.prompt(questions)
    .then(function (data) {
        writeToFile('NEW_README.md', generateReadme(data))
    })
}

// function call to initialize program
init();
