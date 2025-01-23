console.log('1 < 2 < 3: ', 1 < 2 < 3);

console.log('3 < 2 < 1: ', 3 < 2 < 1); // true - 3 < 2 is false, which is coerced to 0 [Number(false)], so 0 < 1 is true

var a = 0;
var b = false;

if (a === b) {
  console.log('They are equal!');
} else {
  console.log('Nope, not equal!');
}
