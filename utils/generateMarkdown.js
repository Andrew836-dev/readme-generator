// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}  
![License badge](https://img.shields.io/badge/license-${data.license}-green)
## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contribution](#Contribution)
5. [Questions](#Questions)
## Installation
${data.installInstructions}
## Usage
${data.usageDetails}
## License
This project uses a ${data.license} license.
## Contributing
${data.contribute}
## Tests
${data.tests}
## Questions
You can find my github account at
[${data.userName}](https://github.com/${data.userName})  
${(data.email?"Or you can email me " + data.email : "")}
`;
}

module.exports = generateMarkdown;
