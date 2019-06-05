"use strict";

let lcg = require("./linearCongruentialGen.js");

module.exports = function* gen(a, b, m, min, max) {
    let gen = lcg(a, b, m);
    while(true) {
	let number = gen.next().value;
	yield min + (number / m) * (max - min); 
    }
};




