// constructor for engineer pulling from employee constructor
const Employee = require('./Employee');

// the engineer constructor will extend from employeee constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call to employee constructor
        super(name, id, email);

        // adding github
        this.github = github;
    }

    // returns github username form user input
    getGitHub() {
        return this.github;
    }

    // role override to Engineer 
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;