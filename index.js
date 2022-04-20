const inquirer = require('inquirer');
const Employee = require('./lib/Employee');


// const name = getName();
// const id = getId();
// const email = getEmail();

// const test = new Employee (name, id, email);

// console.log(test.firstName, test.id, test.email);

input (questions) {
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
    {
        type: 'input',
        name: 'github',
        message: 'What is the GitHub of this Employee?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the ID of this Employee?',
    },
])
.then((answer) => {
    return ;
})
}
