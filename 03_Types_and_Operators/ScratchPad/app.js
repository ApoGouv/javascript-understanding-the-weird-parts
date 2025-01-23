var a = 'hello ' + 'world';
console.log(a); // hello world

var b = '1' + 2;
console.log(b); // 12 - Here 2 is coerced to a string and concatenated to 1

var c = 1 + '2';
console.log(c); // 12 - Here 1 is coerced to a string and concatenated to 2
