// constructor for intern pulling from employee constructor
const Employee = require('./Employee');

// the intern constructor will extend from employeee constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        // call to employee constructor
        super(name, id, email);

        // adding school
        this.school = school;
    }

    // returns school form user input
    getSchool() {
        return this.school;
    }

    // role override to Intern
    getRole() {
        return "Intern";
    }
};

module.exports = Intern;