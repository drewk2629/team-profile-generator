const Intern = require('../lib/Intern');

test('test for Intern methods', () => {
    const intern = new Intern('Drew', '01', 'drewk2629@gmail.com', 'School Name')

    expect(intern.getName()).toBe('Drew');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getId()).toBe('01');
    expect(intern.getEmail()).toBe('drewk2629@gmail.com');
    expect(intern.getSchool()).toBe('School Name');
})