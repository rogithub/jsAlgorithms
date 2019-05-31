let assert = require ("assert");
let Stack = require("./../dataStructures/stack");

describe("Stack", function(){
    describe("isEmpty", function() {
	it("Should be true when created", function(){
	    assert.ok(new Stack().isEmpty());
	});
    });

    describe("peek", function() {
	it("Should return the last added element", function(){
	    let stack = new Stack();
	    stack.push(5);
	    stack.push(8);

	    let pick = stack.peek();
	    assert.equal(pick, 8);

	    assert.equal(2, stack.size());
	    assert.equal(false, stack.isEmpty());
	    
	});
    });

    describe("pop", function(){
	it("Should remove last added element", function(){

	    let stack = new Stack();
	    stack.push(5);
	    stack.push(8);
	    stack.push(11);
	    assert.equal(3, stack.size());

	    let eleven = stack.pop();
	    assert.equal(11, eleven);

	    let eight = stack.pop();
	    assert.equal(8, eight);
	});
    });
});
