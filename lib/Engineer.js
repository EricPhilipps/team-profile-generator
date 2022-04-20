const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor (firstName, id, email, github) {
        super (firstName, id, email);

        this.github = github;
    } 

    getGitHub () {
        return this.github;
    }

    getRole () {
        return 'Employee';
    }
}

module.exports = Engineer;