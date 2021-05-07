

let assert = require("assert");
let Node = require("./../dataStructures/bTreeNode.js");

describe("Binary Tree", function () {
    describe("traversal in order", function () {
        it("Shoul show left, node, right", function () {
            let root = new Node("D");
            let b = new Node("B");
            let a = new Node("A");
            let c = new Node("C");
            let e = new Node("E");

            root.left = b;
            root.right = e;
            b.left = a;
            b.right = c;

            let letters = [];
            let fn = (n) => letters.push(n.data);


            root.inorder(root, fn);

            let expected = ["A", "B", "C", "D", "E"];
            assert.deepEqual(letters, expected);
        });
    });

});
