const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    pushrole() {
        return 'Engineer'
    }

    pushgithub() {
        return this.github;
    }

}

module.exports = Engineer;