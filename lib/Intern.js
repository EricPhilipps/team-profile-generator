const Employee = require ('./Employee')

class Intern extends Employee {
    constructor (school) {
        this.school = school;

        super (Employee.getName(), Employee.getId(), Employee.getEmail());
    } 

    getSchool () {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the ID of this Employee?',
                }
            ])
            .then(({school}) => {
                return school;
            })
    }
    
    getRole () {
        return 'Intern';
    }
}