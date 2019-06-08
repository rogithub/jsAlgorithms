"use strict";


module.exports = (a, b) => {
    
    while(b != 0) {
	let remainder = a % b;
	//gcd(a, b) = gdc(b, remainder);
	a = b;
	b = remainder;
    }

    return a;
};




