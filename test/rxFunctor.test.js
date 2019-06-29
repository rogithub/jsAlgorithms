"use strict";

let assert = require ("assert");
let Reactive = require("./../dataStructures/reactiveFunctor.js");

describe("Reactive Monad", function(){
    describe("map ", function() {
	it("Should throw event on map", function() {
	    let strLen = (n) => {		
		assert.equal(n, "hola");
		return n.length;
	    }

	    let count = 0;
	    let observer = {
		next: (x) => {
		    assert.equal(x, 4);
		    count++;
		}
	    }

	    let value = Reactive.lift("hola", observer);

	    let id = (x) => x;
	    
	    let newValue = value.map(strLen);
	    newValue.map(id);


	    // two times map is called
	    assert.equal(count, 2);
	});
    });
});
