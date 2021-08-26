// Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const createMD = require ('./utils/generateMarkdown');
const init = require('connect-session-sequelize');

// Create an array of questions for the user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: (input) => {
                if (input === '') {
                    return 'Please make sure you enter your Github here.'
                }
                return true; 
            }
        },
        { 
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: (input) => {
                if (input === '') {
                    return 'Please make sure you enter the title of the project. Thank you!'
                }
                return true;
            }    
        },
        {
             type: 'input',
             name: 'name',
             message: 'What is your full name?',
             validate: (input) => {
                 if (input === '') {
                     return 'Please enter your full name here. Seriously.'
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of the project.',
            validate: (input) => {
                if (input === '') {
                    return 'Please enter a description here:'
                }
                return true; 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: (input) => {
                if (input === '') {
                    return 'Please enter your email here:'
                }
                return true; 
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would a developer use this application?',
            validate: (input) => {
                if (input === '') {
                    return 'Please enter your instructions here:'
                }
                return true; 
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What should users know about contributing to your project?',
            validate: (input) => {
                if (input === '') {
                    return 'Please enter your understanding of the comtributions to the project.'
                }
                return true; 
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How would the user test this project?',
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter any tests or examples for your application."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'What command should be run to install dependencies?',
            default: 'npm install',
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
function writeToFile(fileName, data) {
    // console.log(fileName);
    // console.log(data);
    fs.writeFile(`./generated/${fileName}`, generateMarkdown(data), err => {
        if (err) {
            throw err
        };
        console.log('README has been successfully created!')
    });

};

function init() {
    inquirer.prompt(questions).then(function(data) {
        let fileName ="generateREADMEFile.md"
        if(data.contributing === true) {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'contributorCovenant',
                    message: "Please include contributing guidelines here.",
                    default: '[Contributor Covenant]'
                },
            ]).then(value => {
                // console.log('value', value)
                data.contributorCovenant = value.contributorCovenant
                writeToFile(fileName, data);
            })
        } else {
            writeToFile(fileName, data);
        }
    })
};

// Function call to initialize application
init();
      


// Create a function to initialize application
// questions()
//     .then(readMeData => {
//         return createMD(readMeData);
//     })
//     .then(writeToFile)
//     .then(writeFileResponse => {
//         console.log(writeFileResponse);
//     })
//     .catch(err => {
//         console.log(err);
//     });
//     // Function call to initialize application
//     init();