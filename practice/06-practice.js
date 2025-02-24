/*
Task01
Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1: 34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2: 76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/
let num = 76;

let result = num <= 25 && num >= 1 && num <= 50 ? '1st quarter and 1st half' : num >= 26 && num <= 50 ? '2nd quarter and 1st half' : num <= 75 ? '3rd quarter and 2nd half' : '4th quarter and 2nd half'

console.log(result);

/*
Task02
Requirement:
Assume you are given 3 numbers between 1 and 100
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
Test data 1: 2, 4, 6
Expected result 1: true
Test data 2: 68, 44, 2
Expected result 2: true
Test data 3: 10, 20, 25
Expected result 3: false
Test data 4: 51, 67, 99
Expected result 4: false
const num1 = 2;
const num2 = 4;
const num3 = 6;
*/


let num1 = 4
let num2 = 8
let num3 = 12

if (num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) {
    console.log('true');
}
else {
    console.log('false');
}

/*
Task03
Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.

Test data 1: "a"
Expected result 1:
"a"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 2: "$"
Expected result 1: 
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is a whitespace
*/

let str = 'h';
let strCode = str.charCodeAt(0);


if (strCode >= 48 && strCode <= 57) {
    console.log(`"${str}" is a digit`);
}
else if ((strCode >= 65 && strCode <= 90) || (strCode >= 97 && strCode <= 122)) {
    console.log(`"${str}" is a letter`);
}

else if ((strCode >= 48 && strCode <= 57) || (strCode >= 65 && strCode <= 90) || (strCode >= 97 && strCode <= 122)) {
    console.log(`"${str}" is not a special character`);
}
else if (strCode === 32) {
    console.log('Whitespace');
}
else {
    console.log('is a special character');
}

/*
Task04
Write a function named hasBlue() which takes a string argument
and returns true if the string has an occurrence of blue word,
returns false otherwise.
NOTE: Ignore upper/lower cases.
Examples:
hasBlue("Hello World")    -> false
hasBlue("Javabluescript")    -> true
hasBlue("Tech Blue Global")    -> true
hasBlue("1234")    -> false
hasBlue("ABLUEC")    -> true
*/

function hasBlue(word) {
    if(/[blue]/i.test(word)) {
        return 'true'
    }
    return 'false'
}

console.log(hasBlue('MuhnnadBlue'));
console.log(hasBlue('Javabluescript'));
console.log(hasBlue('MuhnnadBlue'));
console.log(hasBlue('    '));


function startT(word) {
    if(/^[t]/i.test(word)){
        return 'true'
    }
        return 'false'
}
