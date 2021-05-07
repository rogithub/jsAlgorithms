

let assert = require("assert");
let gcd = require("./../algo/greatestCommonDivisor.js");

describe("Greatest common divisor", function () {
    describe("usage", function () {
        it("Should return the biggest int dividing two numbers evenly", function () {
            let expected = 12;
            let actual = gcd(60, 24);

            assert.equal(actual, expected);
        });
    });
});
