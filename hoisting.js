var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};
fun();

//parameters argumnets
function num(...nums) {
  return nums[1] * nums[0];
}
let arr = [4, 5];
console.log(num(...arr));

const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};

fn(1, 2, 4, 5, 6, 7, 8);

//callback
//pass another fn as argument
