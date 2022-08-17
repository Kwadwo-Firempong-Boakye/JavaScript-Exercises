const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a, b) => {return a+b},0);
};

const multiply = function(arr) {
  return arr.reduce((a, b) => {
    return a * b;
  })
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(num) {
  let arr = [];
	for (let i = num; i > 0; i--) {
    arr.push(i);
  }

  return arr.reduce((a, b) => {
    return a * b
  }, 1)
};
// console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
