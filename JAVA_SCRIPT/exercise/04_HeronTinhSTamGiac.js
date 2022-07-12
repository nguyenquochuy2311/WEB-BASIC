let a = 5;
let b = 6;
let c = 7;

console.log("Canh a:" + a);
console.log("Canh a:" + b);
console.log("Canh a:" + c);

let s = (a + b + c) / 2;
let value = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
console.log("Dien tich tam giac: " + value);