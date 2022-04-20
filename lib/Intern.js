const Employee = require ('./Employee')

class Intern extends Employee {
    constructor (school) {
        this.school = school;

        super (firstName, id, email);
    } 

    getSchool () {
        return this.school;
    }
    
    getRole () {
        return 'Intern';
    }
}