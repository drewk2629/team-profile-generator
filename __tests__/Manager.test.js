const Manager = require('../lib/Manager');

test('test for Manager methods', () => {
    const manager = new Manager('Drew', '01', 'drewk2629@gmail.com', '(000) 000-0000')

    expect(manager.getName()).toBe('Drew');
    expect(manager.getRole()).toBe('Manager');
    expect(manager.getId()).toBe('01');
    expect(manager.getEmail()).toBe('drewk2629@gmail.com');
    expect(manager.getPhone()).toBe('(000) 000-0000');
})