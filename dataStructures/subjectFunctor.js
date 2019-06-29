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
}

MySubjFunctor.lift = function (value) {
    return new MySubjFunctor(value);
}


module.exports = MySubjFunctor;
