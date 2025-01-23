var a = 3 + 4 * 5;
console.log(a); // 23

var b = (3 + 4) * 5;
console.log(b); // 35

var x = 2,
  y = 3,
  z = 4;
x = y = z; // right-to-left associativity: z is assigned to y, then y is assigned to x

console.log(x); // 4
console.log(y); // 4
console.log(z); // 4
