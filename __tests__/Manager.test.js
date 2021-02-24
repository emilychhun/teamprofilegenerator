let Manager = require("../lib/Manager");
let Employee = require("../lib/Employee");


test('pushrole() should return "Manager"', () => {
    let testmanager = "Manager";
    let manager = new Manager("Amy", 1, "Amy@test.com", 100);
    expect(manager.pushrole()).toBe(testmanager);
});


test("Can set office number via constructor argument", () => {
    let testmanager = 100;
    let manager = new Manager("Amy", 1, "Amy@test.com", testmanager);
    expect(manager.officeNumber).toBe(testmanager);
});


test("Can get office number via pushoffice()", () => {
    let testmanager = 100;
    let manager = new Manager("Amy", 1, "Amy@test.com", testmanager);
    expect(manager.pushofficeNumber()).toBe(testmanager);
});