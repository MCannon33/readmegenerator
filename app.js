const fs = require ('fs')
const inquirer = require ('inquirer')
const generatePage = require('./src/readme-template');

const promptUser = () => {
    return inquirer.promt ([
        //Title 
        {
            type: 'input', 
            name: 'title',
            message: 'What is your project title?',
        },
         //Description
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project',
            },
      //Installation 
        {
            type: 'input',
            name: 'instructions',
            message: 'Enter installation instructions',
            },
        //Usage
         {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information',
            },

        //Contributing
         {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines',
            },
         //Test
         {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions',
            },   
        //Licenses
            {
                type: 'checkbox',
                name: 'license',
                message: 'Select a license for your application (Check one)',
                choices: ['Apache', 'BSD', 'Eclipse']
              },    
            
         //GitHub  
              {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            },

         //Email Address 
         {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            },  
            
         //Table of Contents (have no clue what to do here)    
   
};

promptUser()