// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
const badges = require('./badges');
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data.licensenBadge = badges[data.license];

  return `# ${data.title}
  ${data.licenseBadge}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  Follow these steps for installing this project:
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## Testing
  Use the following for testing this project:
  ${data.testing}
  ## License
  This project is licensed with ${data.license}.
  ## Questions
  If you have questions about this project please contact me at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
