"use strict";


module.exports = (arr) => {
    let square = 2;
    let length = arr.length;
    let f = n => n * n;
    let i = 0;
    
    while(square <= length) {
	square += f(square);
	i++;
    }

    
    
};




