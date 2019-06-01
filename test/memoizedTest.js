"use strict";

let assert = require ("assert");
let once = require("./../functional/once.js");
let id = require("./../functional/identity.js");
let memoized = require("./../functional/memoized.js");

describe("Memoized", function(){
    describe("usage", function() {
	it("Should invalidate once returning always same value", function() {
	    
	    let onceFn = memoized(once(id));
	    
	    let expected = 1;
	    let actual = onceFn(1);	    
	    assert.equal(actual, expected);

	    actual = onceFn(1);
	    assert.equal(actual, expected);
	});
    });
});
