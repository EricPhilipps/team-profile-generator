const Employee = require ('./Employee')

class Manager extends Employee {
    constructor (firstName, id, email, officeNumber) {
        this.officeNumber = officeNumber;

        super (firstName, id, email);
    } 

    getOfficeNumber () {
       return this.officeNumber;
    }
    getRole () {
        return 'Manager';
    }
}