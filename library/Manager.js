// constructor for manager pulling from employee constructor
const Employee = require('./Employee');

// the manager constructor will extend from employeee constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call to employee constructor
        super(name, id, email);

        // adding office number
        this.officeNumber = officeNumber;
    }

    // role override to Manager
    getRole() {
        return "Manager";
    }
};

module.exports = Manager;