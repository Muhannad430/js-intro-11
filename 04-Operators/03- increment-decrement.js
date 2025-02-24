// ++ and -- 

let age = 25 

// 2026 
age++;
// 2027
age++; 
console.log(age); 

////////////

let quantity = 10; 

quantity--; 

console.log(quantity);

// difference between post and pre increment/decrement 
let i = 10; 

let j = i++; // increase i by 1 but not at this moment.

console.log(`I value is ${i} and J is ${j}`); // 11-10 

let count = 25; 

++count; 
console.log(count); // 26 


let multiplier = 5; 
console.log(10 * multiplier++); // 50
console.log(multiplier); // 6

let counter = 5; 

let result = counter++; 

console.log(++counter * result);

// post-increment or pre-increment var++ or var-- 
// we'll use this with loops
