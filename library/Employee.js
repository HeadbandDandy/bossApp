// constructor for the employee

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // since test verified pass for name, id, and email I will call get functions now

    // returns name from user input
    getName() {
        return this.name;
    }

    // returns id from user input
    getId() {
        return this.id;
    }

    // returns Email from user input
    getEmail() {
        return this.email;
    }

    // returns constant role of Employee
    getRole() {
        return "Employee";
    }
};

module.exports = Employee;