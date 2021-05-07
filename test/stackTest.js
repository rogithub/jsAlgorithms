

let assert = require("assert");
let Stack = require("./../dataStructures/stack.js");

describe("Stack", function () {
    describe("isEmpty", function () {
        it("Should be true when created", function () {
            assert.ok(new Stack().isEmpty());
        });
    });

    describe("peek", function () {
        it("Should return the last added element", function () {
            let stack = new Stack();
            stack.push(5);
            stack.push(8);

            let pick = stack.peek();
            assert.strictEqual(pick, 8);

            assert.strictEqual(2, stack.size());
            assert.strictEqual(false, stack.isEmpty());

        });
    });

    describe("pop", function () {
        it("Should remove last added element", function () {

            let stack = new Stack();
            stack.push(5);
            stack.push(8);
            stack.push(11);
            assert.strictEqual(3, stack.size());

            let eleven = stack.pop();
            assert.strictEqual(11, eleven);

            let eight = stack.pop();
            assert.strictEqual(8, eight);
        });
    });
});
