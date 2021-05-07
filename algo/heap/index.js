// Lesson 
// https://www.youtube.com/watch?v=B7hVxCmfPtM

// Heaps are also priority Queues
// ==============================
// The value of every node is at least as large as the values of its
// children.
// The top element has the higher priority.

// Steps to build
// ============================================================================================
// 1. Find max element A[i]
// 2. Swap elements A[n] with A[i]
//    now max element is ath the end of array
// 3. Discard node A[n] from the heap by decrementing heap size
// 4. New root may violate max-heap property, but children are max heaps (if so go to step 1)
// ============================================================================================
// Example: [4,2,1]
// 
//      [4]
// [2]       [1]
//
// Swap max element to last index
// 
//      [1]
// [2]       [4]
//
// Discard last index
// 
//      [1]
// [2]       
//
// Repeat
// 
//      [1]
// [2]       
//

let build = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        while (i != 0) {
            let parent = Math.floor((i - 1) / 2);

            // if child <= parent, we're done, so
            // break out of the while loop
            if (arr[i] <= arr[parent]) break;

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


let inArray = (arr, index) => index < arr.length;

let traverse = (arr, index, fn) => {
    if (inArray(arr, index) === false) return;

    let parent = Math.floor((index - 1) / 2);

    fn({
        node: {
            i: index,
            val: arr[index]
        },
        parent: index === 0 ? {
            i: index,
            val: arr[index]
        } : {
            i: parent,
            val: arr[parent]
        }
    });

    traverse(arr, index + 1, fn);
};

module.exports = {
    build,
    traverse
}




