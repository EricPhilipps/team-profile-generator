const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const employees = [];

const addManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the name of this Employee?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of this Employee?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of this Employee?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of this Employee?',
            },
        ])
        .then((managerInfo) => {
            const manager = new Manager(managerInfo.firstName, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
            employees.push(manager);
            console.log(manager);
        })
}

const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the name of this Employee?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of this Employee?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of this Employee?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the GitHub of this Employee?',
            },
        ])
        .then((EngineerInfo) => {
            const engineer = new Engineer(EngineerInfo.firstName, EngineerInfo.id, EngineerInfo.email, EngineerInfo.github);
            employees.push(engineer);
            console.log(engineer);
        })
}

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the name of this Employee?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of this Employee?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of this Employee?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the school of this Employee?',
            },
        ])
        .then((internInfo) => {
            const intern = new Intern(internInfo.firstName, internInfo.id, internInfo.email, internInfo.school);
            employees.push(intern);
            console.log(intern);
        })
}

addIntern();