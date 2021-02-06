const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./src/readme-template");

inquirer
  .prompt([
    //Title
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    //Description
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project",
    },
    //Installation
    {
      type: "input",
      name: "instructions",
      message: "Enter installation instructions",
    },
    //Usage
    {
      type: "input",
      name: "usage",
      message: "Enter usage information",
    },

    //Contributing
    {
      type: "input",
      name: "contribution",
      message: "Enter contribution guidelines",
    },
    //Test
    {
      type: "input",
      name: "tests",
      message: "Enter test instructions",
    },
    //Licenses
    {
      type: "list",
      name: "license",
      message: "Select a license for your application (Check one)",
      choices: [
        { name: "Apache", values: 0 },
        { name: "BSD", values: 1 },
        { name: "Eclipse", values: 2 },
      ],
    },

    //GitHub
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },

    //Email Address
    {
      type: "input",
      name: "email",
      message: "Enter your email address",
    },

    //Table of Contents (have no clue what to do here)
  ])
  .then((answers) => {
    console.log(answers);
    const readme = generateMarkdown(answers);
    console.log(readme);

    // .then ((responses)=> {
    //     const licenseBadge = generateBadge(values);
    // if (responses.license === 0)
    // console.log("Apache")
    // }

    fs.writeFile("generated.md", readme, function (err) {
      if (err) return console.log(err);
      console.log("Cool ReadMe");
    });
  });
