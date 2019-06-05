let lcg = require("./algo/linearCongruentialGen.js");
let gen = lcg(7, 5, 11);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
