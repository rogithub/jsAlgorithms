let assert = require ("assert");
let id = require("./../functional/identity.js");

describe("Identity", function(){
    describe("usage", function() {
	it("Should return whatever i pass to it", function(){
	    let x = 1;
	    let y = id(x);
	    
	    assert.equal(y, x);
	});
    });
});
