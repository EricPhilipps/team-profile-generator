const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor (github) {
        this.github = github;

        super (name, id, email);
    } 

    getGitHub () {

    }

    getRole () {
        return 'Employee';
    }
}