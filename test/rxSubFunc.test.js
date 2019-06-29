"use strict";

let assert = require ("assert");
let MySubjectFunc = require("./../dataStructures/subjectFunctor.js");

describe("Subject functor", function(){
    describe("map multicast ", function() {
	it("Should throw event on map", function() {
	    let strLen = (n) => {		
		assert.equal(n, "hola");
		return n.length;
	    }

	    let count = 0;
	    let observer1 = {
		next: (x) => {
		    assert.equal(x, 4);
		    count++;
		}
	    }
	    let observer2 = {
		next: (x) => {
		    assert.equal(x, 4);
		    count++;
		}
	    }

	    let value = MySubjectFunc.lift("hola");
	    value.subscribe(observer1);
	    value.subscribe(observer2);

	    let id = (x) => x;
	    
	    let newValue = value.map(strLen);
	    newValue.subscribe(observer1);
	    newValue.map(id);


	    // 3 times map is called
	    assert.equal(count, 3);
	});
    });
});
