let Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    let testengineer = "GitHubUser";
    let engineer = new Engineer("Huy", 1, "huy@test.com", testengineer);
    expect(engineer.github).toBe(testengineer);
});



test("Can get GitHub username via pushgithub()", () => {
   let testengineer = "GitHubUser";
   let engineer = new Engineer("Huy", 1, "huy@test.com", testengineer);
    expect(engineer.pushgithub()).toBe(testengineer);
});
test("pushrole() should return \"Engineer\"", () => {
    let testengineer = "Engineer";
    let engineer = new Engineer("Huy", 1, "huy@test.com", "GitHubUser");
    expect(engineer.pushrole()).toBe(testengineer);
});