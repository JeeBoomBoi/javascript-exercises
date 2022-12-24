const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(list) {
  return list.reduce((total, e) => total + e, 0)
};

const multiply = function(list) {
  return list.reduce((total, e) => total * e, 1)
};

const power = function(num1, num2) {
	return Math.floor(Math.pow(num1, num2))
};

const factorial = function(num) {
	if (num == 0 || num == 1)
    return 1
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
