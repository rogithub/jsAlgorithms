"use strict";

let assert = require ("assert");
let MySubject = require("./../dataStructures/subjectMonad.js");

describe("Subject monad", function(){
    describe("map multicast ", function() {
	it("Should make flat-map", function() {

	    let m1 = MySubject.lift("hola");
	    let id = (x) => x;
	    let count = 0;
	    let observer1 = {
		next: (x) => {
		    assert.equal("hola", x);
		    count++;
		}
	    }

	    m1.subscribe(observer1);

	    let m2 = MySubject.lift(m1);
	    let joined = m2.join();
	    
	    
	    let newValue = joined.map(id);

	    // 1 times map is called
	    assert.equal(count, 1);
	});
    });
});
