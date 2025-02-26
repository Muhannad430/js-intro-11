
for (let i = 100; i >= 0; i--) {
  console.log(i);
}

// Output all the even numbers from 0 to 50 (both inclusive)

for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) console.log(i);
}

// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) 

for (let i = 1; i <= 5; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// Find sum of the numbers from 1 to 5 (both inclusive)

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i
}
console.log(sum);

// Find sum of the numbers from 10 to 15

let sum1 = 0;

for (let i = 10; i <= 15; i++) {
  sum1 += i
}
console.log(sum1);

// Output each character from TechGlobal School 

let str = "TechGlobal School";

for (let i = 0; i <= str.length - 1; i++) {
  console.log(str[i]);
}

// Count the total occurrences of letter 

let str3 = 'banana'
let count = 0;

for (let i = 0; i < str3.length; i++) {
  if (str3[i] === 'a') {
    count++
  }
}
console.log(count);

// Output all the odd numbers from 1 to Random Number (both inclusive)

const { getRandomNumber } = require('./../utils/MathHelper.js');
// Output all the odd numbers from 1 to Random Number
// (between 10 and 20) (both inclusive) -> 1 3 5 7 9 ….

// let num = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
let num = getRandomNumber(10, 20);

for (let i = 1; i <= num; i++) {
  if (i % 2 !== 0) console.log(i);
}

// find the product of all the numbers from 1 to 6 (both inclusive)

let product = 1;

for (let i = 1; i <= 6; i++) {
  product *= i
}
console.log(product);

/*
Generate a random number bt 1 to 10 (both inclusive
  Find the product of all the numbers starting from 1 to randomly generated random
  
  5       -> 1 * 2 * 3 * 4 * 5 -> 120
  6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
  3       -> 1 * 2 * 3 -> 6
*/

const { getRandomNumber } = require('./../utils/MathHelper.js');
let r2 = getRandomNumber(1, 10);
console.log(`The random number is ${r2}.`);

let product2 = 1;

for (let i = 1; i <= r2; i++) {
  product2 *= i
}
console.log(product2);

/*
Print all the numbers between 2 random numbers in the range 
of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/

const { getRandomNumber } = require('./../utils/MathHelper.js');
let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);

console.log(`The random numbers are = ${ran1} and ${ran2}`);

let min = Math.min(ran1, ran2);
let max = Math.max(ran1, ran2);

for (let i = min; i <= max; i++) {
    console.log(i);
}