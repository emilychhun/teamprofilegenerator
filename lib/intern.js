const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    pushrole() {
        return 'Intern';
    }

    pushschool() {
        return this.school;
    }
}

module.exports = Intern;