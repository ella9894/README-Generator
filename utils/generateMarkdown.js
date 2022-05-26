// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
return `
  # ${data.title}

  ##${data.description}

  ##Table of Contents
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contributing](#contributing)
    -[Tests](#tests)
    -[Questions](#questions)

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License
  

  ##Contributinons
  ${data.contributions}

  ##Tests
  ${data.tests}

  ##Questions
  ###Linked is the github account where this project can be found:[${data.github}](https://github.com/${data.github}).
  Please email and questions or concerns about any part of this project to mailto:${data.email}.
`;
    
}


module.exports = generateMarkdown;
