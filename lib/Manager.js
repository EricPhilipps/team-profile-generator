const { MODULESPECIFIER_TYPES } = require('@babel/types');
const Employee = require ('./Employee')

class Manager extends Employee {
    constructor (firstName, id, email, officeNumber) {
        super (firstName, id, email);
        
        this.officeNumber = officeNumber;
    } 

    getOfficeNumber () {
       return this.officeNumber;
    }
    getRole () {
        return 'Manager';
    }
}

module.exports = Manager;