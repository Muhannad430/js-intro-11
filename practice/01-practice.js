/*
task 1
Requirement:
Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)
Multiply number with 5 and print the result with below message
Expected result:
The random number * 5 = {result}
*/

let ranNumber = Math.floor(Math.random() * 50) + 1;
console.log(ranNumber);

let result = (ranNumber * 5);

console.log(`The random *  5 is = ${result}`);

/*
task 2
Requirement:
Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)
Find the min number
Find the max number
Find the absolute difference of the numbers
Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}task 2 
*/

let randomNumber1 = Math.floor(Math.random() * 10) + 1;
let randomNumber2 = Math.floor(Math.random() * 10) + 1;

const max = Math.max(randomNumber1, randomNumber2);
const min = Math.min(randomNumber1, randomNumber2);

// find the abs value
const absDiff1 = Math.abs = (randomNumber1 - randomNumber2);

/*
task 3
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)
Find the remainder of the number by 10
Expected result:
The random number % 10 = {result}
*/

let r = Math.floor(Math.random() * 100) + 50;
console.log(r); 

console.log(`The random number % = ${r % 10}`);

/*
task 4
Requirement:
Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the points will be calculated as below

1st number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points
Test data:
3 7 2 1 8
Expected result:
59
*/

let score = 0; 

let a1 = Math.floor(Math.random() * 10 ) + 1;
score += a1 * 5;

let a2 = Math.floor(Math.random() * 10 ) + 1;
score += a2 * 4;

let a3 = Math.floor(Math.random() * 10 ) + 1;
score += a3 * 3;

let a4 = Math.floor(Math.random() * 10 ) + 1;
score += a4 * 2;

let a5 = Math.floor(Math.random() * 10 ) + 1;

console.log(a1, a2, a3, a4, a5); 

console.log(score); 

/*
task 5 

*/

let rand1 = Math.floor(Math.random() * 25) + 1;
let rand2 = Math.floor(Math.random() * 50) + 26;
let rand3 = Math.floor(Math.random() * 75) + 51;
let rand4 = Math.floor(Math.random() * 100) + 76;

console.log(rand1, rand2, rand3, rand4); 

let max1 = Math.max(rand1, rand2, rand3, rand4);
let min2 = Math.min(rand1, rand2, rand3, rand4);

const absDiff = Math.abs = (rand2, rand3);

const average = (rand1, rand2, rand3, rand4)/ 4;

console.log(`Difference of max and min = ${max1 - min2}`);
console.log(`Difference of second and third = ${rand2 - rand3}`);
console.log(`The avarage of all = ${average}`);