"use strict";

let assert = require ("assert");
let linConGen = require("./../algo/congruentialGen.js");

describe("Linear Congruential Generator", function(){
    describe("usage", function() {
	it("Should return a pseudo random array of values", function(){
	    let expected = [ 0, 5, 7, 10, 9, 2, 8, 6, 3, 4, 0 ];
	    let actual = linConGen(7, 5, 11);
	    assert.deepEqual(actual, expected);
	});
    });
});
