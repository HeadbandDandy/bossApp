
// below generates html page
const createPage = require('./views/layouts/index.html');

// call to employee profiles
const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern');

// modules & connection
const db = require('./db/connection')
const inputCheck = require('./utils/inputCheck')
const fs = require('fs');
const inquirer = require('inquirer');

// array for employees
const emptyArray = [];

// manager prompts
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?",
            validate: inputId => {
                if (inputId) {
                    return true;
                } else {
                    console.log("Please enter the manager's id number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log("Please enter the manager's email!")
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office phone number?",
            validate: inputOfficeNumber => {
                if (inputOfficeNumber) {
                    return true;
                } else {
                    console.log("Please enter the manager's office phone number!")
                    return false;
                }
            }  
        }   
    ])
    .then(inputManagerData => {
        const manager = new Manager (inputManagerData.name, inputManagerData.id, inputManagerData.email, inputManagerData.officeNumber);
        emptyArray.push(manager);
    })
};

// prompts for either engineer or intern
const roleChoice = () => {
    console.log(`
    -------------------------------
    Add Remaining Employees to Team
    -------------------------------
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose role for next employee',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: inputId => {
                if (inputId) {
                    return true;
                } else {
                    console.log("Please enter the employee's id number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log("Please enter the employee's email!")
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github?",
            when: (input) => input.role === "Engineer",
            validate: inputGithub => {
                if (inputGithub) {
                    return true;
                } else {
                    console.log("Please enter the engineer's github!")
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === "Intern",
            validate: inputSchool => {
                if (inputSchool) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                    return false;
                }
            }  
        },
        // verify if more employees need to be added
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Would you like to add another employee?',
            default: true 
        }
    ])
    .then(inputEmployeeData => {
        if (inputEmployeeData.role === 'Engineer') {
            const engineer = new Engineer (inputEmployeeData.name, inputEmployeeData.id, inputEmployeeData.email, inputEmployeeData.github);
            emptyArray.push(engineer);
        } else if (inputEmployeeData.role === 'Intern') {
            const intern = new Intern (inputEmployeeData.name, inputEmployeeData.id, inputEmployeeData.email, inputEmployeeData.school);
            emptyArray.push(intern);
        }
        // will restart prompts if yes is answered
        if (inputEmployeeData.confirmNewEmployee) {
            return roleChoice(emptyArray);
        } else {
            return emptyArray;
        }   
    });
};

// function that will create the html page 
const writeFile = data => {
    fs.writeFile('./views/layouts/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The employee team profile has been completed! Please see index.html for finished product")
        }
    })
};

// call to generate html page
addManager()
    .then(roleChoice)
    .then(emptyArray => {
        return createPage(emptyArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
});