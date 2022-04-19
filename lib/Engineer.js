const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor (github) {
        this.github = github;

        super (firstName, id, email);
        this.firstName = firstName;
        this.id = id;
        this.email = email;
    } 

    getGitHub () {

    }

    getRole () {
        return 'Employee';
    }
}