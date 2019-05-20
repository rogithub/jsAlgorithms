let assert = require ("assert");
let Stack = require("./../stack");

describe("Stack", function(){
    describe("isEmpty", function() {
	it("Should be true when created", function(){
	    assert.ok(new Stack().isEmpty());
	})
    });
});
