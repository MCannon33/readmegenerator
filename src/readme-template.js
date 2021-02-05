// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
##Table of Contents
* 1.[Description](#description)
* 2.[Instructions](#instructions)
* 3.[Usage](#usage)
* 4.[Contribution](#contribution)
* 5.[Tests](#tests)
* 6.[License](#license)
* 7.[Questions](#questions)


## Description 
${data.description}
___
## Instructions 
${data.instructions}
___
## Usage
${data.usage}
___
## Contribution
${data.contribution}
___
## Tests
${data.tests}
___
## License
${data.license}
___
## Questions
For more information please contact me at: 
[GitHub](${data.github})
${data.email}
`;
}

module.exports = generateMarkdown;

// [![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)
// [![Made withJupyter](https://img.shields.io/badge/Made%20with-Jupyter-orange?style=for-the-badge&logo=Jupyter)](https://jupyter.org/try)
// [![Open In Collab](https://colab.research.google.com/assets/colab-badge.svg)
