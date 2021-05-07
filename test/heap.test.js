
const { expect } = require('chai');
let { build, traverse } = require("../algo/heap");

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
            let heapified = build(initial);

            //printer(heapified);

            traverse(heapified, 0, ({ node, parent }) => {
                expect(parent.val).to.be.greaterThanOrEqual(node.val);
            });
        });
    });

    describe('sort', () => {
        it('priority queue, sorted', () => {
            let arr = [2, 5, 10, 12, 6, 8, 1, 3, 7, 9, 4, 11];
            do {
                let heapified = build(arr);
                let max = arr.shift(heapified);

                let maxAll = arr.reduce(function (a, b) {
                    return Math.max(a, b);
                });

                expect(max).to.be.greaterThanOrEqual(maxAll);
            } while (arr.length > 1)
        });
    });
});
