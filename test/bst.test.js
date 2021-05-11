
const { expect } = require('chai');
let { Node, BinarySearchTree } = require('../tree/avl');

let rnd = (max) => Math.floor(Math.random() * max);

describe('AVL functions', () => {
    describe('insert', () => {
        it('insert nodes', () => {

            let bst = new BinarySearchTree();

            for (let i = 12; i > 0; i--) {
                bst.insert(i);
            }

            let root = bst.getRootNode();
            let min = bst.findMinNode(root);

            let max = -1;
            bst.inOrder(root, (node) => {
                expect(max).to.be.lessThan(node.data);
                max = node.data;
            });

        });
    });
});
