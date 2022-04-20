const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor (github) {
        this.github = github;

        super (Employee.getName(), Employee.getId(), Employee.getEmail());
    } 

    getGitHub () {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the GitHub of this Employee?',
                }
            ])
            .then(({github}) => {
                return github;
            })
    }

    getRole () {
        return 'Employee';
    }
}