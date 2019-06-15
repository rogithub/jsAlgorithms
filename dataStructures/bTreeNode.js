"use strict";

let Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;

    // traverse preorder
    this.preorder = function(node, fn) {
	let that = this;
	fn(node);
	if (node.left !== null) that.preorder(node.left, fn);
	if (node.right !== null) that.preorder(node.right, fn);	
    };

    this.inorder = function(node, fn) {
	let that = this;
	if (node.left !== null) that.inorder(node.left, fn);
	fn(node);
	if (node.right !== null) that.inorder(node.right, fn);
    };

    this.postorder = function(node, fn) {
	let that = this;
	if (node.left !== null) that.postorder(node.left, fn);	
	if (node.right !== null) that.postorder(node.right, fn);
	fn(node);
    };

    this.depthFirst = function(node, fn){
	let that = this;
	let children = [];
	// enqueue
	children.push(node);

	while(children.length > 0) {
	    // dequeue
	    let child = children.shift();

	    fn(child);
	    if (child.left !== null) children.push(child.left);
	    if (child.right !== null) children.push(child.right);	
	}
    }

    
};


module.exports = Node;


