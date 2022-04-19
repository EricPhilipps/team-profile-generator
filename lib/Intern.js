const Employee = require ('./Employee')

class Intern extends Employee {
    constructor (school) {
        this.school = school;

        super (firstName, id, email);
        this.firstName = firstName;
        this.id = id;
        this.email = email;
    } 

    getSchool () {

    }
    
    getRole () {
        return 'Intern';
    }
}