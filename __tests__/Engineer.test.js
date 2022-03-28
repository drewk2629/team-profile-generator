const Engineer = require('../lib/Engineer');

test('test for Engineer methods', () => {
    const engineer = new Engineer('Drew', '01', 'drewk2629@gmail.com', 'drewk2629')

    expect(engineer.getName()).toBe('Drew');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getId()).toBe('01');
    expect(engineer.getEmail()).toBe('drewk2629@gmail.com');
    expect(engineer.getGitHub()).toBe('drewk2629');
})