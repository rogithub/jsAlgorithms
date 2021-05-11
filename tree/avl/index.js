class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getRootNode = () => this.root;
    findMinNode = (node) => {
        if (node.left === null) {
            return node;
        }
        return this.findMinNode(node.left);
    }

    getBalanceFactor = (root) => {
        return this.getHeight(root.left) - this.getHeight(root.right);
    }

    getHeight = (root) => {
        let height = -1;
        if (root === null || typeof root === "undefined") return height;

        return Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    }

    insert = (data) => {
        let n = new Node(data);
        if (this.root === null) {
            this.root = n;
            return;
        }

        this.insertNode(this.root, n);
    }

    insertNode = (root, node) => {

        if (root === null) {
            root = node;
        }

        if (node.data < root.data) {
            // insert left
            root.left = this.insertNode(root.left, node);

            // check for balance
            if (root.left !== null && this.getBalanceFactor(root) > 1) {
                if (node.data > root.left.data) {
                    root = rotationLL(root);
                } else {
                    root = rotationLR(root);
                }
            }
        } else if (node.data > root.data) {
            // insert right
            root.right = this.insertNode(root.right, node);

            // check for balance
            if (root.right !== null && this.getBalanceFactor(root) < -1) {
                if (node.data > root.right.data) {
                    root = rotationRR(root);
                } else {
                    root = rotationRL(root);
                }
            }

        }

        return root;
    }

    inOrder = (node, fn) => {
        if (node === null) return;
        this.inOrder(node.left, fn);
        fn(node);
        this.inOrder(node.right, fn);
    }

    preOrder = (node, fn) => {
        if (node === null) return;
        fn(node);
        this.preOrder(node.left, fn);
        this.preOrder(node.right, fn);
    }

    postOrder = (node, fn) => {
        if (node === null) return;
        this.postOrder(node.left, fn);
        this.postOrder(node.right, fn);
        fn(node);
    }
}

rotationLL = (node) => {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
}

rotationRR = (node) => {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
}

rotationLR = (node) => {
    node.left = rotationRR(node.left);
    return rotationLL(node);
}

rotationRL = (node) => {
    node.rigt = rotationLL(node.right);
    return rotationRR(node);
}

module.exports = {
    AVLTree,
    Node
}

