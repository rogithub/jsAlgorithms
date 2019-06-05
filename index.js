let congruentialGen = require("./algo/congruentialGen.js");
let gen = congruentialGen(7, 5, 11);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
