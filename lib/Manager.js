const Employee = require ('./Employee')

class Manager extends Employee {
    constructor () {
        this.officeNumber = getOfficeNumber();

        super ();
        this.firstName = getName();
        this.id = getId();
        this.email = getEmail();
    } 

    getOfficeNumber () {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the office number of this Employee?',
                }
            ])
            .then(({officeNumber}) => {
                return officeNumber;
            })
    }
    getRole () {
        return 'Manager';
    }
}