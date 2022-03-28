const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, phone){
        super(name, id, email)
        this.title = 'Manager';
        this.phone = phone;
    }

    getPhone() {
        return this.phone;
    }

    getRole() {
        return this.title;
    }
}


module.exports = Manager;