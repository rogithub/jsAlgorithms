
const { expect } = require('chai');
let { Node, AVLTree } = require('../tree/avl');

let rnd = (max) => Math.floor(Math.random() * max);

describe('ALV functions', () => {
    describe('insert', () => {
        it('insert nodes', () => {

            let bst = new AVLTree();


            bst.insert(1);
            let root = bst.getRootNode();
            expect(root.data).to.be.eq(1);
            bst.insert(2);
            expect(root.right.data).to.be.eq(2);


            root = bst.insert(3);
            console.dir(root.right);
        });
    });
});
