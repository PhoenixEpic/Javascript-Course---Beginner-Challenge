//Addition calculator
function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(7, 541));

//Hours into Seconds converter
const hoursIntoSeconds = (hours) => {
    return hours * 3600
}

console.log(hoursIntoSeconds(7))

//Calculate the Perimeter of a rectangle
function calcPerimeter(length, width) {
    return 2 * length + 2 * width;
}

console.log(calcPerimeter(6, 7))

//Calculate the Area of a Triangle
function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height;
}

console.log(calcAreaOfTriangle(3, 2))

//Add a word to the front of a static string 'AppleFrontend', etc
function appendFrontend(addWord) {
    return addWord + 'Frontend' 
}

console.log(appendFrontend('Orange'))

//Return true if number Greater than 100 - My method
function sumGreaterThan100(number) {
    if (number > 100)
        return true
    if (number < 100)
        return false
}

console.log(sumGreaterThan100(300))

//Return true if number Greater than 100 - Answer 1
function sumGreater2(num1, num2) {
    if (num1 + num2 > 100) {
        return true;
    }
    else {
        return false;
    }
}

console.log(sumGreater2(12, 100))

//Return true if number greater than 100 - Answer 2 (best practice)
function sumGreater3(num1, num2) {
    return num1 + num2 >= 100
}

console.log(sumGreater3(12, 300))

//Less than or equal to zero
function lessThanOrEqualToZero(num) {
    return num <= 0
}

console.log(lessThanOrEqualToZero(-2))

//Opposite boolean
function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(true))

//Is not the number 0
function isNotZero(num) {
    return num !== 0
}

console.log(isNotZero(0))

//Calculate the remainder, when divided by each other
function calcRemainder(num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(4, 2))

//Is the number odd?
function isOdd(num) {
    return num % 2 !== 0
}

console.log(isOdd(1))

//If a number is even, return 1 otherwise return -1
function booleanInteger(num) {
    return num % 1;
}

console.log(booleanInteger(2))