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
            .then((name) => {
                this.firstName = name;
            })
    }

    getId () {

    }

    getEmail () {

    }

    getRole () {
        return 'Employee';
    }
}

module.exports = Employee;