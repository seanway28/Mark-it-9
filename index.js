// Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const createMD = require ('./utils/generateMarkdown');

// Create an array of questions for the user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
        },
        { 
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
             type: 'input',
             name: 'title',
             message: 'What is the titte of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of the project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your projects?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would a developer use this application?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What should users know about contributing to your project?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How would the user test this project?'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license should your project have?',
            choices: [
                "MIT License",
                "Mozilla Public License 2.0",
                "Boost Software License 1.0",
                "The Unlicense",
                "Apache License 2.0"
            ]
        },
    ]);
};

// Create a fuction to write README file
const writeToProfile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README file created in dist folder.'
            });
        });
    });
};

// Create a function to initialize application
questions()
    .then(readMeData => {
        return createMD(readMeData);
    })
    .then(writeToFile)
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });