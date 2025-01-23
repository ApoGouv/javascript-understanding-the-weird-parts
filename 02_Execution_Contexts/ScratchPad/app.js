function b() {
  console.log(myVar); // 1
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

/*
function a() {
  function b() {
    console.log(myVar); // 2
  }

  var myVar = 2;
  b();
}

var myVar = 1;
a();
*/

/*
function a() {
  function b() {
    console.log(myVar); // 1
  }

  b();
}

var myVar = 1;
a();
*/
