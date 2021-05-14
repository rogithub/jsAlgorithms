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
        var l = this.getHeight(root.left);
        var r = this.getHeight(root.right);
        return l - r;
    }

    getHeight = (root) => {
        return (root === null || root === undefined) ? - 1 :
            (Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1);
    }

    insert = (data) => {
        let n = new Node(data);
        if (this.root === null) {
            this.root = n;
            //console.log(`Top ${n.data}`);
            return;
        }
        this.insertNode(this.root, n);
    }

    insertNode = (root, node) => {
        console.log(`root ${this.root.data} ${this.root.left ? this.root.left.data : 'IZQ'} ${this.root.right ? this.root.right.data : 'DER'}`);
        console.log(`inserting ${node.data}`);
        if (root === null) {
            console.log(`Top ${node.data}`);
            root = node;
        } else if (node.data < root.data) {
            //console.log(`Left ${node.data}`);
            // insert left!
            root.left = this.insertNode(root.left, node);

            // check for balance
            if (root.left !== null && this.getBalanceFactor(root) > 1) {
                console.log(`Rotating left`);
                root = (node.data > root.left.data) ? rotationLL(root) : rotationLR(root);
            }
        } else if (node.data > root.data) {
            //console.log(`Right ${node.data}`);
            // insert right!
            root.right = this.insertNode(root.right, node);

            // check for balance
            if (root.right !== null && this.getBalanceFactor(root) < -1) {
                console.log(`BEFORE`);
                console.dir(root);
                root = (node.data > root.right.data) ? rotationRR(root) : rotationRL(root);
                console.dir(root);

            }

        }

        let n = node;
        //console.log(`izq ${n.left ? n.left.data : 'nada'} top: ${n.data} der ${n.right ? n.right.data : 'nada'}`);

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

