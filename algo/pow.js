"use strict";


module.exports = (a, b) => {
    let square = x => x * x;
    let sum = a;
    let i = 2;
    let counter = 0;

    if (b === 1) return a;

    for (i = 2; i < b; i*=2) {	
	sum = square(sum);
	counter +=1;
    }
    
    console.log("counter:", counter);
    if (counter < b) {
	console.log("add one");
	return sum * a;
    }

  

    return sum;
};




