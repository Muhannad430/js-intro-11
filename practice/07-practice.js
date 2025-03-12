/*
task 01
Requirement:
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])    -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2])        -> 1
*/

// way 1
function firstPos(arr) {
    for (const ele of arr) {
        if (ele > 0) return ele
    }
}

console.log(firstPos([0, 3, -9, 5, 8]));
console.log(firstPos([-2, 0, -7, 10, -5]));
console.log(firstPos([1, 2, 3, -2]));

// way 2
const firstPos2 = arr => arr.filter(ele => ele > 0)[0];

console.log(firstPos2([0, 3, -9, 5, 8]));
console.log(firstPos2([-2, 0, -7, 10, -5]));
console.log(firstPos2([1, 2, 3, -2]));

/*
task 02
Requirement:
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2
*/

// way 1
const lastNeg = arr => arr.filter(ele => ele < 0).at(-1);

console.log(lastNeg([0, 3, -9, 5, 8]));
console.log(lastNeg([-2, 0, -7, 10, -5]));
console.log(lastNeg([1, 2, 3, -2]));

// way 2 
const lastNeg2 = arr => arr.findLast(ele => ele < 0);

console.log(lastNeg2([0, 3, -9, 5, 8]));
console.log(lastNeg2([-2, 0, -7, 10, -5]));
console.log(lastNeg2([1, 2, 3, -2]));

/*
task 03
Requirement:
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> 
"yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> 
"Banana"
firstLongest(["purple", "yellow", "orange"])  -> 
"purple"
*/

const firstLongest = arr => arr.reduce((curr, acc) => {
    if (curr.length >= acc.length) return curr;
    return acc;
});

console.log(firstLongest(["red", "blue", "yellow", "white"]));
console.log(firstLongest(["Apple", "Banana", "Orange"]));
console.log(firstLongest(["purple", "yellow", "orange"]));

/*
task 04
Requirement:
Write a function named as min() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])        -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])        -> 1
*/

// way 1
const min = arr => {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min) min = arr[i]
    }
    return min
}

// way 2
const min2 = arr => Math.min(...arr)

/*
task 07

*/

const commonele = (arr1 ,arr2)