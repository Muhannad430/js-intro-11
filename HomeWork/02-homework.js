console.log('\n--------TASK01--------\n');
/*
Requirement:
Convert given Strings below to number data types and find their sum, product, division, subtraction, remainder and exponentiation.

let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25

NOTE: expected results should exactly match!!!
*/
let str1 = "5";
let str2 = "2"; 

const num1 = (parseInt(str1)); // 5
const num2 = (parseInt(str2)); // 2

console.log(`The sum of ${str1} and ${str2} is = ${num1 + num2}`);
console.log(`The product of ${str1} and ${str2} is = ${num1 * num2}`);
console.log(`The division of ${str1} and ${str2} is = ${num1 / num2}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${num1 - num2}`);
console.log(`The remainder of ${str1} and ${str2} is = ${num1 % num2}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${num1 ** num2}`);

console.log('\n--------TASK02--------\n');
/*
Requirement:
Convert given Strings below to number data types and find the greatest and smallest values and find the average 
and absolute difference of them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

NOTE: expected results should exactly match!!!
*/
let s1 = "200";
let s2 = "-50";

const number1 = (parseInt("200"));
const number2 = (parseInt("-50"));


console.log(`The greatest value is = ${Math.max(number1, number2)}`);
console.log(`The smallest value is = ${Math.min(number1, number2)}`);
console.log(`The average is = ${(number1 + number2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(number1 - number2)}`);

console.log('\n--------TASK03--------\n');
/*
Requirement:
Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included). 
Then, find the absolute difference of these numbers.
 
Test Data:5, 27
Expected Output:
The absolute difference between numbers is = 22
*/
let rand1 = Math.floor(Math.random() * 50) + 1;
let rand2 = Math.floor(Math.random() * 50) + 1;
console.log(rand1);
console.log(rand2);

let absolute = rand1 - rand2; 

console.log(`The absolute difference between numbers is = ${absolute}`);

console.log('\n--------TASK04--------\n');
/*
Requirement:
Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included). Then, 
find the max and min of these numbers.
 
Test Data:3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/
let randNumber1 = Math.floor(Math.random() * 50) + 1;
let randNumber2 = Math.floor(Math.random() * 50) + 1;
let randNumber3 = Math.floor(Math.random() * 50) + 1;
let randNumber4 = Math.floor(Math.random() * 50) + 1;
let randNumber5 = Math.floor(Math.random() * 50) + 1;

let max = Math.max(randNumber1, randNumber2, randNumber3, randNumber4, randNumber5); 
let min = Math.min(randNumber1, randNumber2, randNumber3, randNumber4, randNumber5); 

console.log(`The max value = ${max}`);
console.log(`he min value = ${min}`);

console.log('\n--------TASK05--------\n');
/*
Requirement:
Write a program that generates 3 random numbers between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/
let randNum1 = Math.floor(Math.random() * 51) + 50;
let randNum2 = Math.floor(Math.random() * 51) + 50;
let randNum3 = Math.floor(Math.random() * 51) + 50;

console.log(`The number 1 = ${randNum1}`);
console.log(`The number 2 = ${randNum2}`);
console.log(`The number 3 = ${randNum3}`);
console.log(`The sum of numbers is = ${randNum1 + randNum2 + randNum3}`);

console.log('\n--------TASK06--------\n');
/*
Requirement:
Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) 
and find if all the numbers are more than 25.

Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 25.
*/
let randNum5 = Math.floor(Math.random() * 100) + 1;
let randNum6 = Math.floor(Math.random() * 100) + 1;
let randNum7 = Math.floor(Math.random() * 100) + 1;

console.log(randNum5);
console.log(randNum6);
console.log(randNum7);

console.log(randNum5 > 25 && randNum6 > 25 && randNum7 > 25);

console.log('\n--------TASK07--------\n');
/*
Requirement:
Assume you are given a name let name = "David"; 

1- Print out the length of the name
2- Find the first character in the name and print it
3- Find the last character in the name and print it
4- Find the first 3 characters in the name and print them
5- Find the last 3 characters in the name and print them

Expected Output:The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/
let name = "David";

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name.slice(-1)}`);
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(-3)}`);

