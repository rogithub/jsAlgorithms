"use strict";

let assert = require ("assert");


describe("mix objects into one", function(){
    describe("usage", function() {
	it("Should return a function only once", function() {

	    let a = {  name: "srikanth" };
	    let b = {  age: 30 };
	    let c = {  sex: 'M' };
	    let actual = Object.assign({}, a, b, c);

	    let expected = { name: 'srikanth', age: 30, sex: 'M' };
	    
	    assert.deepEqual(actual, expected);

	});
    });
});
