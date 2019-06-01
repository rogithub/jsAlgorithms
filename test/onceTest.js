"use strict";

let assert = require ("assert");
let once = require("./../functional/once.js");
let id = require("./../functional/identity.js");

describe("Once", function(){
    describe("usage", function() {
	it("Should return a function only once", function() {
	    
	    let onceFn = once(id);

	    let expected = 1;
	    let actual = onceFn(1);	    
	    assert.equal(actual, expected);

	    actual = onceFn(1);
	    assert.equal(actual, undefined);
	});
    });
});
