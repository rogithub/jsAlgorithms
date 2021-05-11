class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    getRootNode = () => this.root;

    insert = (data) => {
        let n = new Node(data);
        if (this.root === null) {
            this.root = n;
            return;
        }

        this.insertNode(this.root, n);
    }

    insertNode = (node, newNode) => {
        if (node.data === newNode.data) return; // already present

        if (newNode.data < node.data && node.left === null) {
            node.left = newNode;
            return;
        }
        if (newNode.data > node.data && node.right === null) {
            node.right = newNode;
            return;
        }

        if (newNode.data < node.data) {
            this.insertNode(node.left, newNode);
            return;
        }
        if (newNode.data > node.data) {
            this.insertNode(node.right, newNode);
            return;
        }
    }

    findMinNode = (node) => {
        if (node.left === null) {
            return node;
        }
        return this.findMinNode(node.left);
    }

    remove = (data) => {
        this.root = this.removeNode(this.root, data);
    }

    removeNode = (node, key) => {
        if (node === null) return null;

        // if data to be delete is less than
        // roots data then mode to left subree
        if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        if (key > node.data) {
            node.right = this.remove(node.right, key);
            return node;
        }

        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }

        // one children
        if (node.left === null) {
            node = node.right;
            return node;
        }

        if (node.right === null) {
            node = node.left;
            return node;
        }

        // two children
        let tmp = this.findMinNode(node.right);
        node.data = tmp.data;

        node.right = this.removeNode(node.right, aux.data);
        return node;
    }

    search = (node, data) => {
        if (node === null) return null;

        if (data < node.data)
            return this.search(node.left, data);

        if (data > node.data)
            return this.search(node.right, data);

        return node;
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

module.exports = {
    BinarySearchTree,
    Node
}

