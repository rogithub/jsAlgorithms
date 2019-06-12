let heap = require("./algo/heap.js");
let heapToArr = require("./algo/heapToArrays.js");
let ptree = require("./algo/printTree.js");

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
let arrH = heap(arr);
let lists = heapToArr(arrH);
console.log(arrH)
console.log(ptree( lists ));
