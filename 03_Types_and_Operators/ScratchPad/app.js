/*
function greet(name) {
  console.log('Hello ' + name);
}
// greet('Tolis'); // Hello Tolis
greet(); // Hello undefined
*/

function greet(name) {
  // This is common pattern to set default values
  // If is undefined, empty string, null, 0, NaN, or false it will be replaced with '<Your name here>'
  name = name || '<Your name here>';
  console.log('Hello ' + name);
}

greet('Tolis'); // Hello Tolis
greet(); // Hello <Your name here>
