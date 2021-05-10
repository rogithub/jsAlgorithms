let { traverseBackward, traverseForward, inArray } = require('../index');
let tree = [];

let rotateLeft = (arr, node) => {

}

let rotateRight = (arr, node) => {

}

let add = (item) => {
    tree.push(item);

    if (tree.length === 1) return;

    traverseBackward(tree, ({ i, parent, left, right }) => {
        if (i === left && tree[parent] >= tree[i]) return;
        if (i === right && tree[parent] >= tree[i]) return;

    });

}


module.exports = {
    add
}
