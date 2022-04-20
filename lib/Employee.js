const inquirer = require("inquirer");


class Employee {
    constructor (firstName, id, email) {
        this.firstName = firstName;
        this.id = id;
        this.email = email;
    }

    getName () {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'What is the name of this Employee?',
                }
            ])
            .then((answer) => {
                return answer.firstName;
            })
    }

    getId () {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the ID of this Employee?',
                }
            ])
            .then((answer) => {
                return answer.id;
            })
    }

    getEmail () {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of this Employee?',
                }
            ])
            .then((answer) => {
                return answer.email;
            })
    }

    getRole () {
        return 'Employee';
    }
}

module.exports = Employee;