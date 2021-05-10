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
}