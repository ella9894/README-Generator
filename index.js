// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptQuestions = ReadmeData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a short description explaining the what, why and how of your project.(Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: installationionInput => {
                if (installationionInput) {
                    return true;
                } else {
                    console.log('You need to enter installation instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for and/or examples of how to use your application. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to enter usage information for your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project from the following options.',
            choices: ['GNUGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT', 'ISC', 'Boost Software License 1.0', 'The Unlicense']
        },
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Would you like other developers to contribute to your project?',
            default: true
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What are the guidelines for another developer to contribute to your project?',
            when: ({ confirmContribute }) => confirmContribute
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to include any tests for your application?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Include any necessary tests for your application.',
            when: ({ confirmTest }) => confirmTest
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You need to enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address so that you can be reached with questions. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter your email address!');
                    return false;
                }
            }
        },
    ])
}; 

// TODO: Create a function to write README file
function writeToFile(data) {
    return fs.writeFile('./dist/README2.md', data, err => {
        if (err) {
            console.log(err);
        }
    });
};


// TODO: Create a function to initialize app
promptQuestions().then(ReadmeData => {
    console.log('Page created!');
    return generateMarkdown(ReadmeData); 
    }).then(pageReadme => {
    return writeToFile(pageReadme);
    })
    .catch(err => {
    console.log(err);
    });

