// n*100-5
// (n+3)*8+3

const add2 = n => n * 100 - 5;
const mul2 = n => (n + 3) * 8 + 3

const n = 2
console.log(add2(n)+2);
console.log(mul2(n));
console.log(add2(mul2(n)));