"use strict";

let Rx = require('rxjs');

class MySubjFunctor extends Rx.Subject {
    constructor(value) {
	super();
	this._val = value;
    }

    map (fn) {
	const that = this;
	let val = fn(that._val);
	that.next(val);
	return MySubjFunctor.lift(val);
    }

    join () {
	const that = this;
	const { observers, _val } = that._val;
	const copy = observers.slice();

	const newSubject = MySubjFunctor.lift(_val);

	for (let i = 0; i < copy.length; i++) {
	    newSubject.subscribe(copy[i]);
	}

	return newSubject;
    }

    chain (fn) {
	return this.map(fn).join();
    }
}

MySubjFunctor.lift = function (value) {
    return new MySubjFunctor(value);
}


module.exports = MySubjFunctor;
