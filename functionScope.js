var a = 200,
  b = 3,
  name = "pia";

function add() {
  return a + b;
}
console.log(add());

function inner() {
  var a = 4,
    b = 9;

  function add() {
    console.log(`${name}`, a + b);
    return `${name} => ${a} + ${b}`;
  }
  return add();
}
inner();
