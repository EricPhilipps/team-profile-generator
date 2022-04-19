const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor () {
        this.github = getGitHub();

        super (firstName, id);
        this.firstName = getName();
        this.id = getID();
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