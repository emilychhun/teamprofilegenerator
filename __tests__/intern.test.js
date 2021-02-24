
let Intern = require("../lib/Intern");


test("pushrole() should return \"Intern\"", () => {
    let testintern = "Intern";
    let intern = new Intern("Ling", 1, "ling@test.com", "UCLA");
    expect(intern.pushrole()).toBe(testintern);
});

test("Can get school via pushschool()", () => {
    let testintern = "UCLA";
    let intern = new Intern("Ling", 1, "ling@test.com", testintern);
    expect(intern.pushschool()).toBe(testintern);
});

test("Can set school via constructor", () => {
    let testintern = "UCLA";
    let intern = new Intern("Ling", 1, "ling@test.com", testintern);
    expect(intern.school).toBe(testintern);
});