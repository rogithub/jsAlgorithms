"use strict";

let assert = require ("assert");
let linConGen = require("./../algo/congruentialGen.js");


/*
As a very small example, suppose A = 7, B = 5, and M = 11. If you start with
X0 = 0, the previous equation gives you the following sequence of numbers:

X0 = 0
X1 = (7 × 0 + 5) Mod 11 = 5
X2 = (7 × 5 + 5) Mod 11 = 40 Mod 11 = 7
X3 = (7 × 7 + 5) Mod 11 = 54 Mod 11 = 10
X4 = (7 × 10 + 5) Mod 11 = 75 Mod 11 = 9
X5 = (7 × 9 + 5) Mod 11 = 68 Mod 11 = 2
X6 = (7 × 2 + 5) Mod 11 = 19 Mod 11 = 8
X7 = (7 × 8 + 5) Mod 11 = 61 Mod 11 = 6
X8 = (7 × 6 + 5) Mod 11 = 47 Mod 11 = 3
X9 = (7 × 3 + 5) Mod 11 = 26 Mod 11 = 4
X10 = (7 × 4 + 5) Mod 11 = 33 Mod 11 = 0

Because X10 = X0 = 0, the sequence repeats.
*/



describe("Linear Congruential Generator", function(){
    describe("usage", function() {
	it("Should return a pseudo random array of values", function(){
	    let expected = [ 0, 5, 7, 10, 9, 2, 8, 6, 3, 4, 0 ];
	    let gen = linConGen(7, 5, 11);
	    let actual = [];
	    for (let i = 0; i < expected.length; i++) {
		actual.push(gen.next().value);
	    }
	    
	    assert.deepEqual(actual, expected);
	});
    });
});
