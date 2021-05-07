let heap = require("./heap.js");
let treeToArr = require("../../utils/treeToArrays");
let ptree = require("../../utils/printTree.js");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let arrH = heap(arr);
let lists = treeToArr(arrH);
console.log(arrH)
console.log(ptree(lists));
