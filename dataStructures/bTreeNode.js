
let Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;

    // traverse preorder
    this.preorder = function (node, fn) {
        let that = this;
        fn(node);
        if (node.left !== null) that.preorder(node.left, fn);
        if (node.right !== null) that.preorder(node.right, fn);
    };

    this.inorder = function (node, fn) {
        let that = this;
        if (node.left !== null) that.inorder(node.left, fn);
        fn(node);
        if (node.right !== null) that.inorder(node.right, fn);
    };

    this.postorder = function (node, fn) {
        let that = this;
        if (node.left !== null) that.postorder(node.left, fn);
        if (node.right !== null) that.postorder(node.right, fn);
        fn(node);
    };

    this.depthFirst = function (node, fn) {
        let that = this;
        let children = [];
        // enqueue
        children.push(node);

        while (children.length > 0) {
            // dequeue
            let child = children.shift();

            fn(child);
            if (child.left !== null) children.push(child.left);
            if (child.right !== null) children.push(child.right);
        }
    }

    // adds in sorted order
    addNode = function (data) {
        const that = this;
        // see if this value is smaller than ours.
        if (data < that.data) {
            if (that.left === null) that.left = new Node(data);
            else left.addNode(data);
        } else {
            if (that.right === null) that.right = new Node(data);
            else that.right.addNode(data);
        }
    }


};


module.exports = Node;


