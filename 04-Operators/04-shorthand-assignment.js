// assignment operator 

// shorthand assignment operators 

let num = 5;

// increase the num variable by 5 
// num = num + 5; 
num += 5; 

console.log(num); // 10 

let n1 = 10; 

n1 *= 2; 
n1 /= 4;
n1 **= 3; 

console.log(n1); 


let n2 =7;

n2 += ++n2;

n2 /= 3;

console.log(n2++ % 3); // 2



let n3 = 20;
let n4 = 3;

n3 += (n4 -= 1); // n4 = 2, n3 = 22

--n3; // n3 = 21 

console.log(--n3 * ++n4); // n3 = 20, n4 = 3 -> 60 


let num1 = 6; 
let num2 = 4; 

console.log(`The sum of the numbers is = ${num1 + num2}`);
console.log(`The product of the numbers is = ${num1 * num2}`);
console.log(`The subtraction of the numbers is = ${num1 - num2}`);
console.log(`The division of the numbers is = ${num1 / num2}`);
console.log(`The remainder of the numbers is = ${num1 % num2}`);
console.log(`The exponentiation of the numbers is = ${num1 ** num2}`);


// rectangle area and perimeter calculation
let side1 = 5;
let side2 = 8;

let area = 2 * (5 + 8); 

console.log(area);

console.log(`The area is = ${side1 * side2}`);
console.log(`The perimeter is = ${2 * (side1 + side2)}`);


let salary = 120_000;

console.log(`the mounthly salary is = $${salary / 12}`);
console.log(`the weekly salary is = $${(salary / 52).toFixed(2)}`);
console.log(`the bi_weekly salary is = ${salary / 26}`);


