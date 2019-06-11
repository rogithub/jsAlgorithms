"use strict";

/*
module.exports = (arr) => {
    let nl = '\n';
    let text = '';

    // indexes
    let parent = (i) => Math.floor((i-1)/2);
    let left = (i) => (2 * i) + 1;
    let right = (i) => (2 * i) + 2;
    let square = (i) => i * i;

    for (let i = 0; ((2*i)+2) <= arr.length; i++) {
	text += ` i=${i} - `;	
	
	text += `left ${arr[left(i)]} `;
	text += `right ${arr[right(i)]} `;
	text += `${nl}`;
    }

    return `${text}`;
    
};
*/


module.exports = (arr) => {
    let nl = '\n';
    let text = '';
    let squares = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    // let halves = [120, 60, 30, 15, 7, 3]

    let i = 0;
    let j = 0;

    let caben = squares[j]
    while(i < arr.length) {	
	for (let y = 0; y < caben; y++) {
	    text += ` ${arr[i]} `;	    
	    i++;
	}
	text += `${nl}`;
	j++;
	caben = squares[j];
    }

    return `${text}`;   
}




