"use strict";

let Rx = require('rxjs');

class ReactiveMonad extends Rx.Observable {
    constructor(value, observer) {
	super(observer);
	this._observer = observer;
	this._val = value;
    }

    map (fn) {
	const that = this;
	let val = fn(that._val);
	that._observer.next(val);
	return ReactiveMonad.lift(val, that._observer);
    }
}

ReactiveMonad.lift = function (value, observer) {
    return new ReactiveMonad(value, observer);
}


module.exports = ReactiveMonad;
