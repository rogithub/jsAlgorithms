"use strict";


module.exports = (a, b) => {
    let square = x => x * x;
    let sum = a;
    let i = 2;
    let counter = 1;

    if (b === 1) return a;

    for (i = 2; i <= b; i*=2) {
	counter*=2;
	sum = square(sum);	
    }
    
    while (counter < b) {
	counter++;
	sum = sum  * a;
    }

  

    return sum;
};



