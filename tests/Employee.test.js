const { beforeAll, expect } = require('@jest/globals');
const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

describe ("Employee", () => {
    describe("Initialization", () => {
        it ("should create object with name, id, and email with new keyword", () => {
            const employee = new Employee('John', 1, 'johndoe@gmail.com');
            
            expect(employee.firstName).toEqual('John');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('johndoe@gmail.com');
        })       
    })

    describe("getName", () => {
        let backup;
        before(() => {
            backup = inquirer.prompt;
            inquirer.prompt = (answer) => Promise.resolve({firstName: 'John'})
        })
        it("should take name input and return it", () => {
            const fName = Employee.getName();

            expect(fName).toEqual('John');
        })
    })
})