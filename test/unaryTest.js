"use strict";

let assert = require ("assert");
let unary = require("./../functional/unary.js");

describe("Unary", function(){
    describe("usage", function() {
	it("Should return a function with one arg", function(){
	    let expected = [1, 2, 3];
	    let arrStr = ['1','2','3'];
	    
	    
	    let actual = arrStr.map(unary(parseInt));
	    
	    assert.deepEqual(actual, expected);
	});
    });
});
