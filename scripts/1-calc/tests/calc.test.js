const addition = require("../calc.js");

describe("Calculator", () => {
    describe("Addition", () => {
        test("should return 42", () =>{
            expect(addition(22, 20)).toBe(42);
        });
        test("should return 3", () =>{
            expect(addition(1, 2)).toBe(3);
        });
    });
});