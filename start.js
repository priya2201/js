//functions in js
let test = () => {
  console.log("hi");
};

test();
//function declaration
function square(num) {
  console.log(num * num);
  return num * num;
}

square(2);
//function express
let sq = function (num) {
  return num * num;
};
console.log(sq(5));

//first class functions

//pass in another function
function square(num) {
  console.log(num * num);
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is " + fn(4));
}

displaySquare(square);

//iife - immediately invoked function expression
(function square(num) {
  console.log(num * num);
  return num * num;
})(7);

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1); //1
