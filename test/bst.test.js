
const { expect } = require('chai');
let { Node, BinarySearchTree } = require('../tree/bst');

let rnd = (max) => Math.floor(Math.random() * max);

describe('BST functions', () => {
    describe('insert', () => {
        it('insert nodes', () => {

            let bst = new BinarySearchTree();

            for (let i = 12; i > 0; i--) {
                let random = rnd(100);
                bst.insert(random);
            }

            let root = bst.getRootNode();
            let min = bst.findMinNode(root);
            let max = -1;

            let sorted = [];
            bst.inOrder(root, (node) => {
                expect(max).to.be.lessThan(node.data);
                max = node.data;
                sorted.push(node.data);
            });

            console.dir(sorted);

        });
    });
});
