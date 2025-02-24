// mock interview quastions:
/*
1-
Find if a number is even or not.
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is even, print true.
Otherwise, print false.
Examples:
1 -> false 2 -> true 5 -> false 10 -> true
*/

let g1 = Math.floor(Math.random() * 10) + 1;






/*

Calculate the absolute difference between max and min of 3 random numbers?
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference.

Examples:
3,5,2 ->3
7,3,1 ->6
5,5,5 ->0
1,10,9 ->9
10,1,2 ->9

PSEUDO CODE -> expalning ur work step by step. 
1- generate 3 random numbers between 1 and 2 (both inclusive)
2- find the max and min among the random numbers 
3- calc and output max - min 
*/

let r1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let r2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let r3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

console.log(`Random numbers is = ${r1}, ${r2}, ${r3}`);

let max = Math.max(r1, r2, r3);
let min = Math.min(r1, r2, r3);

console.log(`Max number is ${max} and min number is ${min}`);

let result = max - min; 

console.log(`the result is = ${result}`); 

/*
Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it.
Examples:
3,5,7 ->5 
7,3,2 ->4 
5,5,5 ->5 
1,10,7 ->6 
10,1,1 ->4
*/

let a1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let a2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let a3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

console.log(`Random numbers is = ${a1}, ${a2}, ${a3}`);

console.log(`The average of the numbers is = ${(a1 + a2 + a3) / 3}`);

/*
Find the smallest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it.
Examples:
3,5,2 ->2 
7,3,1 ->1 
5,5,5 ->5 
1,10,9 ->1 
10,1,2 ->1
*/

let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;
let randomNum3 = Math.floor(Math.random() * 10) + 1;

console.log(`Random numbers is = ${randomNum1}, ${randomNum2}, ${randomNum3}`);

const smallestNumber = Math.min(randomNum1, randomNum2, randomNum3);

console.log(`The smallest number is = ${smallestNumber}`);

/*
Find the smallest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it.
Examples:
3,5 ->3 
7,3 ->3 
5,5 ->5 
1,10 ->1 
10,1 ->1
*/

let ranNum1 = Math.floor(Math.random() * 10) + 1;
let ranNum2 = Math.floor(Math.random() * 10) + 1;

console.log(`Random numbers is = ${ranNum1}, ${ranNum2}`);

const smallestNumber1 = Math.min(ranNum1, ranNum2);

console.log(`The smallest number is = ${smallestNumber1}`);

/*
Find the greatest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it.
Examples:
3,5,2 ->5 
7,3,1 ->7 
5,5,5 ->5 
1,10,9 ->10 
10,1,2 ->10
*/

let b1 = Math.floor(Math.random() * 10) + 1;
let b2 = Math.floor(Math.random() * 10) + 1;
let b3 = Math.floor(Math.random() * 10) + 1;

console.log(`Random numbers is = ${b1}, ${b2}, ${b3}`);

const theGreatest = Math.max(b1, b2, b3);

console.log(`The greatest number is = ${theGreatest}`);

/*
Find the greatest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it.
Examples: 
3,5
7,3
5,5
1, 10 10, 1
->5 ->7 ->5 -> 10 -> 10
*/

let c1 = Math.floor(Math.random() * 10) + 1; 
let c2 = Math.floor(Math.random() * 10) + 1;

console.log(`Random numbers is = ${c1}, ${c2}`);

const theGreatest1 = Math.max(c1, c2);

console.log(`The greatest number is = ${theGreatest1}`);

/*
Find if an age is allowed to get Driver License or not.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
Examples:
1 -> false 15 -> false 16 -> true 45 -> true 100 -> true
*/


let age = Math.floor(Math.random() * 100) + 1;

console.log(`Age is = ${age}`);

const allowedAge = 16

if (age >= 16) {
    console.log('True');
}
else console.log('False')

/*
Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the average of the numbers and print it.
*/

let average1 = Math.floor(Math.random() * 10) + 1;
let average2 = Math.floor(Math.random() * 10) + 1;
let average3 = Math.floor(Math.random() * 10) + 1;

console.log(`My 3 random numbers are = ${average1}, ${average2}, ${average3}`); 

let average = (average1 + average2 + average3) / 3; 

console.log(`The average of the 3 numbers is = ${average}`);


/*
Find if sum of 2 random numbers is even or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.
*/

let randNumberOne = Math.floor(Math.random() * 10) + 1
let randNumberTwo = Math.floor(Math.random() * 10) + 1
console.log(randNumberOne);
console.log(randNumberTwo);

let sumOf = randNumberOne + randNumberTwo; 
console.log(`The sum is = ${sumOf}`);

if (sumOf % 2) {
    console.log('True');
}
else console.log('False')