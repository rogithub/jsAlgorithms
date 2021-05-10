
const { expect } = require('chai');
let { build } = require("../tree/heap");
let { printer, traverse, getHeight } = require('../tree');

describe('Tree functions', () => {
    describe('getHeight', () => {
        it('total height of tree', () => {
            // Asserts should prove that parent greather or
            // equal to child nodes

            // [12, 10, 11, 7, 9, 8, 1, 2, 3, 6, 4, 5]
            /*
                           12               
                   10              11       
                7       9       8       1   
              2   3   6   4   5   *   *   * 
                               
            */
            // indexes     0  1   2   3  4  5  6  7  8  9  10  11
            // heights     1  2   2   3  3  3  3  4  4  4  4   4
            let initial = [2, 5, 10, 12, 6, 8, 1, 3, 7, 9, 4, 11];
            let heapified = build(initial);

            expect(getHeight(0)).to.be.eq(1);

            expect(getHeight(1)).to.be.eq(2);
            expect(getHeight(2)).to.be.eq(2);

            expect(getHeight(3)).to.be.eq(3);
            expect(getHeight(4)).to.be.eq(3);
            expect(getHeight(5)).to.be.eq(3);
            expect(getHeight(6)).to.be.eq(3);

            for (let i = 7; i < 15; i++) {
                expect(getHeight(i)).to.be.eq(4);
            }
        });
    });
});
