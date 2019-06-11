"use strict";

// In a heap, the value of every node is at least as large as the values of its
// children.

module.exports = (arr) => {
    for (let i = 0; i < arr.length; i++){
	let index = i;
	while(index != 0) {
	    let parent = Math.floor((index - 1) / 2);
	    
	    // if child <= parent, we're done, so
	    // break out of the while loop
	    if ( arr[index] <= arr[parent] ) break;

	    // swap the parent and child.
	    let temp = arr[index];
	    arr[index] = arr[parent];
	    arr[parent] = temp;

	    // move to the parent
	    index = parent;
	}
    }  

    return arr;
};




