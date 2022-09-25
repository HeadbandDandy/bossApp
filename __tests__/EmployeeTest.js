//  below tests the Employee constructor

const Employee = require('../lib/Employee');

// This test will create a new employee and also test that it is properly displaying name, id, and email for that employee
test('creates a new employee', () => {
    const employee = new Employee('John', 1111, 'john@gmail.com'); 

    // expected employee name
    expect(employee.name).toEqual(expect.any(String));
    // expected employee id
    expect(employee.id).toEqual(expect.any(Number));
    // expected employee email
    expect(employee.email).toEqual(expect.any(String));
});

test('return role of Employye', () => {
    const employee = new Employee('John', 1111, 'john@gmail.com');

    expect(employee.getRole()).toBe('Employee');
})