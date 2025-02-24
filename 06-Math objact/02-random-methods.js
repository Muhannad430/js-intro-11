//
Math.random(); // returns a number between 0 (inclusive) and 1 (exclusive)

// generate a random number between 3 and 5 (both inclusive)
// 3, 4, 5 
let result = Math.floor(Math.random() * 3) +3;
console.log(result); 

/*
Find a random number between a and b (both inclusive)
1. calc how many numbers you have in the rang 
count = biggerNumber - smallerNumber + 1

2. multiply the count you found with math.random() method

3. floor the result using math.floor() method 
newresult = math.floor(result)

4. add your your smaller number to new result 
finalresult = newResult + smallerNumber ; 

let result = math.floor(math.random() * (max - min + 1)) +min;
let result = math.ceil(math.random() * (max - min + 1)) +min -1;
let result = math.round(math.random() * (max - min)) +min;
*/
let r1 = Math.floor(Math.random() * (10 - 6 + 1)) + 6; 
console.log(r1);

let num1 = 2; 
let num2 = 4; 

// generate a random number between num1 and num2 both inclusive 
let max = Math.max(num1, num2);
let min = Math.min(num1, num2);

let r2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(r2);

