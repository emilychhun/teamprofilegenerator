let Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    let employee = new Employee();
    expect(typeof (employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    let name = "Reza";
    let employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    let testemployeeid = 100;
    let employee = new Employee("Reza", testemployeeid);
    expect(employee.id).toBe(testemployeeid);
});

test("Can set email via constructor argument", () => {
    let testemployeeEmail = "reza@test.com";
    let employee = new Employee("Reza", 1, testemployeeEmail);
    expect(employee.email).toBe(testemployeeEmail);
});

test("Can get name via pushname()", () => {
    let testemployeename = "Reza";
    let employee = new Employee(testemployeename);
    expect(employee.pushname()).toBe(testemployeename);
});

test("Can get id via pushid()", () => {
    let testemployeeId = 100;
    let employee = new Employee("Reza", testemployeeId);
    expect(employee.pushid()).toBe(testemployeeId);
});

test("Can get email via pushemail()", () => {
    let testemployeeEmail = "reza@test.com";
    let employee = new Employee("Reza", 1, testemployeeEmail);
    expect(employee.pushemail()).toBe(testemployeeEmail);
});

test("pushrole() should return \"Employee\"", () => {
    let testemployeerole = "Employee";
    let employee = new Employee("Reza", 1, "reza@test.com");
    expect(employee.pushrole()).toBe(testemployeerole);
});
