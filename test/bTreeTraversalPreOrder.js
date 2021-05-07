

let assert = require("assert");
let Node = require("./../dataStructures/bTreeNode.js");

describe("Binary Tree", function () {
    describe("traversal preorder", function () {
        it("Shoul traverse node, left, right", function () {
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


            root.preorder(root, fn);

            let expected = ["D", "B", "A", "C", "E"];
            assert.deepStrictEqual(letters, expected);
        });
    });

});
