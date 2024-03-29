// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[![license](https://img.shields.io/badge/license-${license}-yellow)]`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU_AGPLv3") {
    return `https://spdx.org/licenses/AGPL-3.0-or-later.html`;
  } else if (license === "Mozilla_Public_License_2.0") {
    return `https://spdx.org/licenses/MPL-2.0.html`;
  } else if (license === "Apache_License_2.0") {
    return `https://spdx.org/licenses/Apache-2.0.html`;
  } else if (license === "MIT") {
    return `https://spdx.org/licenses/MIT.html`;
  } else if (license === "ISC") {
    return `https://spdx.org/licenses/ISC.html`;
  } else if (license === "Boost_Software_License_1.0") {
    return `https://spdx.org/licenses/BSL-1.0.html`;
  } else if (license === "The_Unlicense") {
    return `https://spdx.org/licenses/Unlicense.html`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${renderLicenseBadge(data.license)}(${renderLicenseLink(data.license)})

  ## Description

  ${data.description}

  ## Table of Contents

  [Installation](#Installation)

  [Usage](#Usage)

  [License](#License)

  [Contributing](#Contributing)

  [Tests](#Tests)

  [Questions](#Questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Questions

  Linked is the github account where this project can be found: [${data.github}](https://github.com/${data.github}).
  
  Please email questions or concerns about any part of this project to: ${data.email}.
`;
}

module.exports = generateMarkdown;
