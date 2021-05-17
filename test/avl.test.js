
const { expect } = require('chai');
let { Node, AVLTree } = require('../tree/avl');

let rnd = (max) => Math.floor(Math.random() * max);

describe('ALV functions', () => {
    describe('insert', () => {
        it('insert nodes', () => {

            let bst = new AVLTree();

            bst.insert(1);
            let r = bst.getRootNode();
            expect(r.data).to.be.eq(1);

            bst.insert(2);
            expect(r.right.data).to.be.eq(2);

            // causes rotation
            bst.insert(3);
            r = bst.getRootNode();
            expect(r.left.data).to.be.eq(1);
            expect(r.data).to.be.eq(2);
            expect(r.right.data).to.be.eq(3);

        });
    });
});
