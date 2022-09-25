// below tests Intern constructor 
const Intern = require('../lib/Intern');

// Will test new container that includes employee inherited information plus school

test("creates a new intern", () => {
    const intern = new Intern('Gabe', 2222, 'gabe@gmail.com', "University of Pakistan");

    // expected intern name
    expect(intern.name).toEqual(expect.any(String));
    // expected intern id
    expect(intern.id).toEqual(expect.any(Number));
    // expected intern email
    expect(intern.email).toEqual(expect.any(String));
    // expected intern school
    expect(intern.school).toEqual(expect.any(String));
});

// test for new role
test('return role of Intern', () => {
    const intern = new Intern('Gabe', 2222, 'gabe@gmail.com', "University of Pakistan");

    expect(intern.getRole()).toBe("Intern");
});