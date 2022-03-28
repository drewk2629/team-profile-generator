const Employee = require('../lib/Employee');

test('test for Employee methods', () => {
    const employee = new Employee('Drew', '01', 'drewk2629@gmail.com')

    expect(employee.getName()).toBe('Drew');
    expect(employee.getRole()).toBe('Employee');
    expect(employee.getId()).toBe('01');
    expect(employee.getEmail()).toBe('drewk2629@gmail.com');
})