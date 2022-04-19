const Employee = require ('./Employee')

class Intern extends Employee {
    constructor () {
        this.school = getSchool();

        super ();
        this.firstName = getFirstName();
        this.id = getId();
        this.email = getEmail();
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