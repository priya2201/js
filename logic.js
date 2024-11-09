//palindrome
let test = (str) => {
  let str1 = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  console.log(str1);
  let str2 = str1.split("").reverse().join("");
  console.log(str2);
  return str1 == str2;
};

console.log(test("A man, a plan, a canal: Panama"));

console.log(test("a dam"));
//find missing no in array
let missingno = (arr) => {
  let n = arr.length;
  let expect = (n * (n + 1)) / 2;
  console.log(expect);
  let actual = arr.reduce((acc, cur) => acc + cur, 0);
  console.log(actual);
  return expect - actual;
};

console.log(missingno([0, 3, 1, 2, 5]));
console.log(missingno([9, 6, 4, 2, 3, 0, 1]));
console.log(missingno([6, 5, 4, 3, 2, 1, 0]));
