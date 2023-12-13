// Write a program that takes three inputs: two positive integers & one of the arithmetic operators (as a string). Your program should return the result of the two numbers having that operator used on them.

// The four operators are "add", "subtract", "divide", "multiply".

// Write a test:

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// iniitalize 4 helper funcs: add, subtract, mult, divide
//all accept two ints
//all four return one integer

// func add (two nums as args)
//return num1 plus num2

// func subtract (two nums as args)
//return num1 - num2

// func mult (two nums as args)
//return num1 times num2

// func divide (two nums as args)
//return num1 divided by num2

// initialize func doMath, accepts two args (ints), and one str
//check what str says
//if str strictly equals 'add'
//return func add(num1, num2)

//else if str strictly equals 'sub'
//return func sub(num1, num2)

//else if str strictly equals 'multiply'
//return func multiply(num1, num2)

//else if str strictly equals 'divide'
//return func divide(num1, num2)

//else return 'error'

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function doMath(num1, num2, str) {
  if (str === "add") {
    return add(num1, num2);
  } else if (str === "subtract") {
    return subtract(num1, num2);
  } else if (str === "multiply") {
    return multiply(num1, num2);
  } else if (str === "divide") {
    return divide(num1, num2);
  } else {
    return "error!!!!!!!!";
  }
}
