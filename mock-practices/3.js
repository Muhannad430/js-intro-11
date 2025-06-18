/*
Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked.
*/

function reverseStringWords(str) {
    const arr = str.split(' ')

    return arr.map(x => x.split('').reverse().join('')).join(' ')
}

console.log(reverseStringWords("Hello World"));

/*
Write a function named add() which takes two array of numbers as argument and returns a new 
array with sum of given arrays elements. 
NOTE: Be careful about the array sizes as they could be different. 
*/

function add(arr1, arr2) {
    let arrResualt = []
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (i >= arr1.length) arrResualt.push(arr2[i])
        else if (i >= arr2.length) arrResualt.push(arr1[i])
        else arrResualt.push(arr1[i] + arr2[i])
    }
    return arrResualt
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

/*
Fizz Buzz 
Write a function named fizzBuzz() which takes a number argument and returns an array 
consisting of numbers starting from 1 to given number. However, it will return "Fizz" for the 
numbers divided by 3, "Buzz" for the numbers divided by 5, and "FizzBuzz" for the numbers 
divided both by 3 and 5.
*/

function fizzBuzz(num) {
    let res = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && num % 5 === 0) res.push('FizzBuzz')
        else if (i % 5 === 0) res.push('Buzz')
        else if (i % 3 === 0) res.push('Fizz')
        else (res.push(i))
    }
    return res
}
console.log(fizzBuzz(3));

/*
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked. 
NOTE: Palindrome: It is a word that is read the same backward as forward 
Examples: kayak, civic, madam 
NOTE: your function should ignore case sensitivity
*/

const isPalindrome = word => word.toLowerCase() === word.toLowerCase().split('').reverse().join('');

isPalindrome("Hello")
isPalindrome("Kayak") 
