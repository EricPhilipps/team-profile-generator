const Employee = require ('./Employee')

class Manager extends Employee {
    constructor (officeNumber) {
        this.officeNumber = officeNumber;

        super (Employee.getName(), Employee.getId(), Employee.getEmail());
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