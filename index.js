// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptQuestions = ReadmeData => {
    if (!ReadmeData.questions) {
        ReadmeData.questions = [];
    }
    return inquirer.prompt([
        
};


// TODO: Create a function to initialize app
function init() {
promptQuestions.then(ReadmeData => {
    return generateMarkdown(ReadmeData);
    })
    .then(pageMarkdown => {
        return writeToFile(pageMarkdown);
    })
    .catch(err => {
        console.log(err);
    });
}
// Function call to initialize app
init();
