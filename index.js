let fn = (a, b) => {
  console.log(a+b)
  return a + b;
};
fn(2, 3, () => {
  console.log("input");
});

//test(5)(6)(3) => 90
// let testfn = ((a)(b)(c))> {
//   console.log(a * b * c);
// };
// testfn(5)(6)(3);

// const fs = require("fs");

// fs.readFile("./hello.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

function test(a) {
  return function (b) {
    return function (c) {
      console.log(a * b * c);

      return a * b * c;
    };
  };
}
test(5)(6)(3);

function greet(name){
  console.log('hoo'+name)
}

let greet1=function (c){
  return c('io')
}
greet1(greet)