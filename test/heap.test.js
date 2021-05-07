let assert = require('assert');
const { should, expect } = require('chai');
let toHeap = require("../algo/heap/heap");
let printer = require("../utils/printTree");

let inArray = (arr, index) => index < arr.length;

let treeTraverse = (arr, index, fn) => {
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

    treeTraverse(arr, index + 1, fn);
};

describe('Heap', () => {
    describe('build', () => {
        it('given an array, it builds a heap', () => {
            // Asserts should prove that parent greather or
            // equal to child nodes

            // [12, 10, 11, 7, 9, 8, 1, 2, 3, 6, 4, 5]
            /*
                           12               
                   10              11       
                7       9       8       1   
              2   3   6   4   5   *   *   * 
                               
            */
            let initial = [2, 5, 10, 12, 6, 8, 1, 3, 7, 9, 4, 11];
            let heapified = toHeap(initial);

            //printer(heapified);

            treeTraverse(heapified, 0, ({ node, parent }) => {
                expect(parent.val).to.be.greaterThanOrEqual(node.val);
                //console.log(`${parent.val} >= ${node.val}`);
            });
        });
    });
});
