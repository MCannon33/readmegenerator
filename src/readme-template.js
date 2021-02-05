// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description 
${data.description}
## Instructions 
${data.instructions}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Tests
${data.tests}
## License
${data.license}
## Questions
${data.github}
${data.email}
`;
}

module.exports = generateMarkdown;
