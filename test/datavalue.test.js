"use strict";

let assert = require ("assert");
let DataValue = require("./../dataStructures/datavalue.js");

describe("DataValue functor", function(){
    describe("usage", function() {
	it("Should return a DataValue", function() {

	    let value = DataValue.of("SDS", 1);	    
	    let id = (n) => {
		assert.equal(n, 1);		
		return n;
	    }
	    let newValue = value.map(id);
	    
	});
    });
});
