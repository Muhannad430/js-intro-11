console.log('\n--------TASK01--------\n');
/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/

function hasUpperCase(str) {
    if (/^[A-Z]/.test(str)) {
        return true;
    }
    return false;
}

console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));

console.log('\n--------TASK02--------\n');
/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/

function noDigit(str) {
    let newStr = ''
    for (const i of str) {
        if (i === i.toUpperCase()) return newStr;
    }
    return newStr;
}

console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));



console.log('\n--------TASK03--------\n');
/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/

function noVowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));

console.log('\n--------TASK04--------\n');
/*
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/

function no13(arr) {
    return arr.map(num => num === 13 ? 0 : num);
}

console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13, 13, 13]));

console.log('\n--------TASK05--------\n');
/*
Requirement:
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/

function middleInt(num1, num2, num3) {
    let array = [num1, num2, num3]; 
    array.sort((x, y) => x - y); 

    return array[1];
}

console.log(middleInt(-1, 25, 10));
console.log(middleInt(1, 2, 2));

console.log('\n--------TASK06--------\n');
/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/

function sumOfDigits(str) {

}




console.log('\n--------TASK07--------\n');
/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []
*/

function arrFactorial() {

}



console.log('\n--------TASK08--------\n');
/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' 
*/





