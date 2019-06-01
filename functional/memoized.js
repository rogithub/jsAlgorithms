"use strict";

module.exports = (fn) => {
    const lookupTable = {};
    return function() {
	//let key = JSON.stringify(arguments);
	return lookupTable[arguments] || (lookupTable[arguments] = fn.apply(this, arguments));
    }
};


