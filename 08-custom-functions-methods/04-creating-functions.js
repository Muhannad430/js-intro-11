// 1. function declaration - traditional way 
function sum1(num1, num2) {
    return num1 + num2 
}

console.log(sum1(1, 5)); 


// 2. function expression 
const sum2 = function (num1, num2) {
    return num1 + num2
}
console.log(sum2(1, 5)); 


// 3. Arrow functions
const sum3 = (num1, num2) => {
    return num1 + num2
}
console.log(sum3(5, 3)); 

/*
Create a function called isWin()
This takes 2 number args and return true if both numbers are positive (1 or above)
Else it will return false

isWin(1, 5)   -> true
isWin(1, 0)   -> false
isWin(2, -3)  -> false
isWin(-4, -3) -> false
*/

function isWin1(num1, num2) {
    return num1 > 0 && num2 > 0
}


const isWin2 = function (num1, num2) {
    return num1 > 0 && num2 > 0
}


const isWin3 = (num1, num2) => num1 > 0 && num2 > 0

console.log(isWin3(1, 2)); 
console.log(isWin3(5, 1)); 
console.log(isWin3(-1, 0)); 

/*
Write a function called theEnd
it takes 2 parameters called str, bool
if bool is true, return the first letter from the given string
if bool is false, return the last letter from the string

theEnd("Hello", true)   → "H"
theEnd("Hello", false)  → "o"
theEnd("oh", true)      → "o"
*/

function theEnd(str, bool) {
    if(bool) {
        return str[0];
    }
    else {
        return str.at(-1);
    }
}
console.log(theEnd('Hello', true));
console.log(theEnd('Hello', false));

