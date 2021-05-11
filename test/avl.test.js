
const { expect } = require('chai');
let { Node, AVLTree } = require('../tree/avl');

let rnd = (max) => Math.floor(Math.random() * max);

describe('ALV functions', () => {
    describe('insert', () => {
        it('insert nodes', () => {

            let bst = new AVLTree();

            for (let i = 12; i > 0; i--) {
                let random = rnd(100);
                bst.insert(random);
            }

            let root = bst.getRootNode();
            let max = -1;

            let sorted = [];
            bst.inOrder(root, (node) => {
                expect(max).to.be.lessThan(node.data);
                max = node.data;
                sorted.push(node.data);
            });

            let minNode = bst.findMinNode(root);
            expect(minNode.data).to.be.eq(sorted[0]);

            console.log(sorted);

        });
    });
});
