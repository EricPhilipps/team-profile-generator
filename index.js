const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const employees = [];

const addManager = async () => {
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the name of this Manager?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of this Manager?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of this Manager?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of this Manager?',
            },
        ])
        .then((managerInfo) => {
            const manager = new Manager(managerInfo.firstName, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
            employees.push(manager);
            console.log(manager);
        })
}

const addEngineer = async () => {
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the name of this Engineer?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of this Engineer?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of this Engineer?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the GitHub of this Engineer?',
            },
        ])
        .then((EngineerInfo) => {
            const engineer = new Engineer(EngineerInfo.firstName, EngineerInfo.id, EngineerInfo.email, EngineerInfo.github);
            employees.push(engineer);
            console.log(engineer);
        })
}

const addIntern = async () => {
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the name of this Intern?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of this Intern?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of this Intern?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the school of this Intern?',
            },
        ])
        .then((internInfo) => {
            const intern = new Intern(internInfo.firstName, internInfo.id, internInfo.email, internInfo.school);
            employees.push(intern);
            console.log(intern);
        })
}

const run = async () => {
    let addMore = true;
    let option = null;
    console.log('Welcome! Please continue and build your own team!\n\n');
    
    console.log('We will start with the manager of your team:\n\n')

    await addManager();

    console.log('\nNow that we have done that, we can add more Employees\n');

    while (addMore) {
    await inquirer
        .prompt([
            {
                type: 'list', 
                name: 'choice',
                message: 'Choose one of the following employees to create: ',
                choices: ['Engineer', 'Intern', 'Done']
            },
        ])
        .then((choiceInfo) => {
            option = choiceInfo.choice;
        })

        if (option === 'Done') {
            addMore = false;
        }
        else if (option === 'Engineer') {
            await addEngineer();
        }
        else if (option === 'Intern') {
            await addIntern();
        }
    }
}

run();

console.log(employees);