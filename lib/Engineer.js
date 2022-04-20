const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor (github) {
        this.github = github;

        super (firstName, id, email);
    } 

    getGitHub () {
        return this.github;
    }

    getRole () {
        return 'Employee';
    }
}