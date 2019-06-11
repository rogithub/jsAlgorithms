"use strict";


module.exports = (arr) => {
    for (let i = 0; i < arr.length; i++){
	while(i != 0) {
	    let parent = (i - 1) / 2;

	    // if child <= parent, we're done, so
	    // break out of the while loop
	    if ( arr[i] <= arr[parent] ) return arr;

	    // swap the parent and child.
	    let temp = arr[i];
	    arr[i] = arr[parent];
	    arr[parent] = temp;

	    // move to the parent
	    i = parent;
	}
    }  

    return arr;
};




