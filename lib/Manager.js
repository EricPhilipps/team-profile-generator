const Employee = require ('./Employee')

class Manager extends Employee {
    constructor (officeNumber) {
        this.officeNumber = officeNumber;

        super (firstName, id, email);
        this.firstName = firstName;
        this.id = id;
        this.email = email;
    } 

    getRole () {
        return 'Manager';
    }
}