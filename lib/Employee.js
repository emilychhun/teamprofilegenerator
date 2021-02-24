class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    pushname() {
        return this.name;
    }

    pushid() {
        return this.id;
    }

    pushemail() {
        return this.email;
    }

    pushrole() {
        return 'Employee';
    }
}

module.exports = Employee;