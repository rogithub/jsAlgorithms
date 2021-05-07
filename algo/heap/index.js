let { build } = require("./heap.js");
let printer = require("../../treePrinter");

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let arr = [2, 5, 10, 12, 6, 8, 1, 3, 7, 9, 4, 11];
let arrH = build(arr);
printer(arrH);
