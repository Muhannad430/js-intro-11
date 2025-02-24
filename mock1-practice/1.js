/*
Find if a number is even or not.
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is even, print true.
Otherwise, print false.
Examples:
1 -> false 2 -> true 5 -> false 10 -> true
*/

let randnumber1 = Math.floor(Math.random() * 10)+1;
console.log(randnumber1);

console.log(randnumber1 % 2 === 0);

/*
Find if a number is odd or not.
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is odd, print true.
Otherwise, print false.
Examples:
1 -> true 2 -> false 5 -> true 10 -> false
*/

let randnum1 = Math.floor(Math.random() * 10)+1;
console.log(randnum1);

console.log(randnum1 % 2 !== 0);

/*
Find if a number is positive or not.
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is positive, print true.
Otherwise, print false.
Examples:
-5 -> false -1 -> false 0 -> false 1 -> true 5 -> true
*/
// Math.floor(Math.random() * (max - min + 1)) + min

let s1 = Math.floor(Math.random() * (5 - -5 + 1)) + -5;
let s2 = Math.floor(Math.random() * (5 - -5 + 1)) + -5;
let s3 = Math.floor(Math.random() * (5 - -5 + 1)) + -5;
console.log(s1);
console.log(s2);
console.log(s3);

console.log(s1 > 0, s2 > 0, s3 > 0);

/*
Find if a number is negative or not.
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is negative, print true.
Otherwise, print false.
Examples:
-5 -> true -1 -> true 0 -> false 1 -> false 5 -> false
*/

let s4 = Math.floor(Math.random() * (5 - -5 + 1)) + -5;
let s5 = Math.floor(Math.random() * (5 - -5 + 1)) + -5;
let s6 = Math.floor(Math.random() * (5 - -5 + 1)) + -5;
console.log(s4);
console.log(s5);
console.log(s6);

console.log(s4 < 0, s5 < 0, s6 < 0);

/*
Find if a number is divisible by 5 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 5, print true.
Otherwise, print false.
Examples:
1 -> false 5 -> true 20 -> true 37 -> false 50 -> true
*/

let m = Math.floor(Math.random() * 50) + 1;

console.log(m % 5 === 0);

/*
Find if a number is divisible by 7 or not.
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 7, print true.
Otherwise, print false.
Examples:
1 -> false 7 -> true 35 -> true 49 -> true 50 -> false
*/

let a = Math.floor(Math.random() * 50) + 1;
console.log(a);

console.log(a % 7 === 0);

/*
Calculate the sum of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the sum of the numbers and print it.
Examples: 3,5
7,3
5,5
1, 10 10, 1
->8 ->10 ->10 -> 11 -> 11
*/

let a1 = Math.floor(Math.random() * 10) + 1;
let a2 = Math.floor(Math.random() * 10) + 1;
console.log(a1);
console.log(a2);

console.log(`The sum of numbers = ${a1 + a2}`);

/*
Calculate the absolute difference between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the absolute difference of the numbers and print it.
Examples:
3,5 ->2 7,3 ->4 5,5 ->0 1,10 ->9 10,1 ->9
*/

let h1 = Math.floor(Math.random() * 10) + 1;
let h2 = Math.floor(Math.random() * 10) + 1;
console.log(h1, h2);

console.log(Math.abs(h1 - h2));

/*
Calculate the product of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the product of the numbers and print it.
Examples: 3,5
7,3
5,5
1, 10 10, 1
->15 ->21 ->25 -> 10 -> 10
*/

let z1 = Math.floor(Math.random() * 10) + 1;
let z2 = Math.floor(Math.random() * 10) + 1;
console.log(z1);
console.log(z2);

console.log(`The product of the numbers is = ${z1 * z2}`);

/*
Calculate the square of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the square of the number and print it.
Examples:
1 ->1
2 ->4
5 ->25 10 -> 100
*/

let b = Math.floor(Math.random() * 10) + 1;
console.log(b);

console.log(`The square of the number is = ${b * b}`);

/*
Calculate the cube of a number.
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the cube of the number and print it.
Examples:
1 ->1
2 ->8
5 ->125 10 -> 1000
*/

let cube = Math.floor(Math.random() * 10) + 1;
console.log(cube);

console.log(`The cube of the number is = ${Math.pow(cube, 3)}`);

/*
Convert miles to kilometers.
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
Examples:
1 ->1.6 2 ->3.2 5 ->8
*/

let rand = Math.floor(Math.random() * 10) + 1;
console.log(rand);
console.log(rand * 1.6);

/*
Convert kilograms to pounds.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as a kilogram unit.
Convert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds.
Examples:
1 ->2.2 20 ->44 75 -> 165 100 -> 220
*/

let kilo = Math.floor(Math.random() * 100) + 1;
console.log(kilo);
console.log(kilo * 2.2);

/*
Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). 
If the numbers are equal, print true.
Otherwise, print false.
Examples:
1,1 -> true
1,2 -> false
2,3 -> false 2,2 -> true 3,3 -> false
*/

let equal1 = Math.floor(Math.random() * 3) + 1;
let equal2 = Math.floor(Math.random() * 3) + 1;
console.log(equal1);
console.log(equal2);

console.log(equal1 === equal2);

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

console.log(age >= 16);

/*
Find the greatest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it.
Examples: 3,5
7,3
5,5
1, 10 10, 1
->5 ->7 ->5 -> 10 -> 10
*/

let g1 = Math.floor(Math.random() * 10) + 1;
let g2 = Math.floor(Math.random() * 10) + 1;
console.log(`Random numbers is = ${g1}, ${g2}`);

const theGreatest = Math.max(g1, g2);
console.log(`The greatest is = ${theGreatest}`);

/*
Find the greatest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it.
Examples:
3,5,2 ->5 7,3,1 ->7 5,5,5 ->5 1,10,9 ->10 10,1,2 ->10
*/

let c1 = Math.floor(Math.random() * 10) + 1;
let c2 = Math.floor(Math.random() * 10) + 1;
let c3 = Math.floor(Math.random() * 10) + 1;
console.log(`Random numbers is = ${c1}, ${c2}, ${c3}`);

const theGreatest1 = Math.max(c1, c2, c3);
console.log(`The greatest is = ${theGreatest1}`);

/*
Find the smallest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it.
Examples:
3,5 ->3 7,3 ->3 5,5 ->5 1,10 ->1 10,1 ->1
*/

let m1 = Math.floor(Math.random() * 10) + 1;
let m2 = Math.floor(Math.random() * 10) + 1;
console.log(`Random numbers is = ${m1}, ${m2}`);

const thesmallest = Math.min(m1, m2);
console.log(`The smallest is = ${thesmallest}`);

/*
Find the smallest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it.
Examples:
3,5,2 ->2 7,3,1 ->1 5,5,5 ->5 1,10,9 ->1 10,1,2 ->1
*/

let n1 = Math.floor(Math.random() * 10) + 1;
let n2 = Math.floor(Math.random() * 10) + 1;
let n3 = Math.floor(Math.random() * 10) + 1;
console.log(`Random numbers is = ${n1}, ${n2}, ${n3}`);

const thesmallest2 = Math.min(n1, n2, n3);
console.log(`The samllest is = ${thesmallest2}`);

/*
Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it.
Examples:
3,5,7 ->5 7,3,2 ->4 5,5,5 ->5 1,10,7 ->6 10,1,1 ->4
*/

let r1 = Math.floor(Math.random() * 10) + 1;
let r2 = Math.floor(Math.random() * 10) + 1;
let r3 = Math.floor(Math.random() * 10) + 1;
console.log(`My numbers are ${r1}, ${r2}, ${r3}`);

console.log(`The average of the numbers is = ${(r1 + r2 + r3) / 3}`);

/*
Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference.
Examples:
3,5,2 ->3 7,3,1 ->6 5,5,5 ->0 1,10,9 ->9 10,1,2 ->9
*/

let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let num3 = Math.floor(Math.random() * 10) + 1;
console.log(`My random numbers are = ${num1}, ${num2} and ${num3}`);

let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);
console.log(`The greatest is = ${max}`);
console.log(`The smallest is = ${min}`);

console.log(`Their absolute difference is = ${Math.abs(max - min)}`);

/*
Find the quarter of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75 4th quarter is 76-100
Examples:
15 -> 1st quarter 73 -> 3rd quarter 39 -> 2nd quarter 87 -> 4th quarter
*/

let randomnumber = Math.floor(Math.random() * 100) + 1;
console.log(randomnumber);

let result = randomnumber <= 25 ? '1st quarter' : randomnumber >= 26 && randomnumber <= 50 ? '2nd quarter' : randomnumber <= 75 ? '3rd quarter' : '4th quarter'

console.log(result);

/*
Find the midpoint of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100
Examples:
15 -> 1st half
50 -> 1st half
51 -> 2nd half
87 -> 2nd half 100 -> 2nd half
*/

let h = Math.floor(Math.random() * 100) + 1; 
console.log(h); 

console.log(h >= 1 &&  h <= 50 ? '1st half' : '2nd half');

/*
Find if sum of 2 random numbers is even or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the sum of the random numbers is even, print true.
Otherwise, print false.
Examples: 3,5
7,3
5,5
1, 10 10, 1
-> true -> true -> true -> false -> false
*/

let j1 = Math.floor(Math.random() * 10) + 1;
let j2 = Math.floor(Math.random() * 10) + 1;
console.log(j1);
console.log(j2);

let theSum = j1 + j2;

console.log(theSum % 2 === 0);
/*
Find if product of 2 random numbers is odd or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the product of the random numbers is odd, print true.
Otherwise, print false.
Examples: 3, 5
7, 3
5, 5
1, 10 10, 1
-> true -> true -> true -> false -> false
*/

let rando1 = Math.floor(Math.random() * 10) + 1;
let rando2 = Math.floor(Math.random() * 10) + 1;
console.log(rando1);
console.log(rando2);

let theproduct = rando1 * rando2;

console.log(theproduct % 2 !== 0);

/*
Area of a rectangle
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
Examples: rectangleArea(5, 4) rectangleArea(3, 7) rectangleArea(6, 10)
-> 20 -> 21 -> 60
*/

const rectangleArea = (x, y) => x * y
console.log(rectangleArea(5, 4)); 
console.log(rectangleArea(3, 7)); 
console.log(rectangleArea(6, 10)); 

/*
Perimeter of a rectangle.
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Perimeter = 2 * (x + y)
Examples: rectanglePerimeter(5, 4) rectanglePerimeter(3, 7) rectanglePerimeter(6, 10)
-> 18 -> 20 -> 32
*/

const rectanglePerimeter = (x, y) => 2 * (x + y)
console.log(rectanglePerimeter(5, 4)); 
console.log(rectanglePerimeter(3, 7)); 
console.log(rectanglePerimeter(6, 10)); 
/*
Area of a square
Write a function named as squareArea() which calculates the area of a square when invoked. 
NOTE: Assume the side of the square is x.
Conversion Formula:Area = x * x
Examples: squareArea(5) squareArea(3) squareArea(6)
-> 25 -> 9 -> 36
*/

const squareArea = (side) => side * side
console.log(squareArea(5)); 
console.log(squareArea(3)); 
console.log(squareArea(6)); 
/*
Perimeter of a square.
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked. 
NOTE: Assume the side of the square is x.
Conversion Formula: Perimeter = 4 * x
Examples: squarePerimeter(5) squarePerimeter(3) squarePerimeter(6)
-> 20 -> 12 -> 24
*/

const squarePerimeter = (side) => 4 * side
console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));

/*
Double The Word
Write a function named as doubleWord() which takes a string word as an argument and 
returns the given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
doubleWord("Tech") -> "TechTech" doubleWord("Global") -> "GlobalGlobal"
*/

const doubleWord = (word) => word + word
console.log(doubleWord("Tech"));
console.log(doubleWord("Global"));

/*
First Character
Write a function named as firstCharacter() which takes a string word as an argument and 
returns the first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
firstCharacter("Tech") -> "T" firstCharacter("Global") -> "G"
*/

const firstCharacter = (word) => word[0]

console.log(firstCharacter("Global")); 
console.log(firstCharacter("TechGlobal")); 
/*
First Two Characters
Write a function named as firstTwoCharacters() which takes a string word as an argument and 
returns the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
Examples: firstTwoCharacters("Tech") 
firstTwoCharacters("Global") 
firstTwoCharacters("") 
firstTwoCharacters(" ") 
firstTwoCharacters("1")
-> "Te" -> "Gl" -> "" ->"" -> "1"
*/

const firstTwoCharacters = (word) => word.slice(0, 1)

console.log(firstTwoCharacters("Global"));
console.log(firstTwoCharacters(""));
console.log(firstTwoCharacters(" "));
console.log(firstTwoCharacters("1"));

/*
last Character
Write a function named as lastCharacter() which takes a string word as an argument and 
returns the last character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples: lastCharacter("Tech") lastCharacter("Global") lastCharacter(" ") lastCharacter("123")
-> "h" -> "ll" -> " " -> "3"
*/

const lastCharacter = (word) => word.slice(-1)
console.log(lastCharacter("Tech")); 
console.log(lastCharacter("Global")); 
console.log(lastCharacter(" ")); 
console.log(lastCharacter("123")); 

/*
Last Two Characters
Write a function named as lastTwoCharacters() which takes a string word as an argument and 
returns the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples: lastTwoCharacters("Tech") 
lastTwoCharacters("Global") 
lastTwoCharacters("") 
lastTwoCharacters(" ") 
lastTwoCharacters("1")
-> "ch" -> "al" -> "" -> " " -> "1"
*/

const lastTwoCharacters = (word) => word.slice(-2)
console.log(lastTwoCharacters("Tech"));
console.log(lastTwoCharacters("Global"));
console.log(lastTwoCharacters(""));
console.log(lastTwoCharacters(" "));
console.log(lastTwoCharacters("1"));

/*
First and Last Characters
Write a function named as firstLast() which takes a string word as an argument and 
returns the first and the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples: firstLast("Tech") 
firstLast("TechGlobal") 
firstLast("")
firstLast(" ") 
firstLast("1") 
firstLast("abcde")
-> "Th" -> "Tl" -> "" ->"" -> "1" -> ae
*/

const firstLast = (word) => word.charAt(0) + word.slice(-1)
console.log(firstLast("Tech"));
console.log(firstLast("TechGlobal"));
console.log(firstLast(""));
console.log(firstLast(" "));
console.log(firstLast("1"));
console.log(firstLast("abcde"));

/*
Has Five
Write a function named as hasFive() which takes a string word as an argument and 
returns true if given string has at least 5 characters, and false otherwise when invoked.
Examples: hasFive("Tech") 
hasFive("Global") 
hasFive("") 
hasFive("12345") 
hasFive("hello")
-> false -> true -> false -> true -> true
*/

const hasFive = (word) => word.length >= 5
console.log(hasFive("Tech"));
console.log(hasFive("Global"));
console.log(hasFive(""));
console.log(hasFive("12345"));
console.log(hasFive("hello"));

/*
Middle
Write a function named as middle() which takes a string word as an argument and 
returns the middle character if the string has odd length, 
and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
Examples: middle("Tech") 
middle("Global") 
middle("abcde") 
middle("1") 
middle("abc") 
middle(“1234”)
-> "ec" -> "ob" -> "c" -> "1" -> "b" -> "23"
*/

const middle = (word) => {
    if(word.length === 0) return '';

    else if(word.length % 2 === 0) return word[(word.length / 2) - 1] + (word[word.length / 2]);
    else return word[Math.floor(word.length / 2)]
}
console.log(middle("Tech"));
console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle("1"));
console.log(middle("abc"));
console.log(middle("“1234”"));

/*
Longer String
Write a function named as longer() which takes two string words as arguments and 
returns the string that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
Examples: longer("Tech", "Global") 
longer("Hello", "Hi") 
longer("Hello", "World")
-> "Global" -> "Hello" -> "Hello"
*/

function longer(str1, str2) {
    if(str1.length >= str2.length) {
        return str1
    }
       return str2 
}
console.log(longer('Tech', 'Global'))
console.log(longer('hello', 'hi'))
/*
Shorter String
Write a function named as shorter() which takes two String words as arguments and 
returns the String has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.
Examples: shorter("Tech", "Global") 
shorter("Hello", "Hi") 
shorter("Hello", "World")
-> "Tech" -> "Hi"
-> "World"
*/

function shorter(word1, word2) {
    if(word1.length <= word2.length) {
        return word1
    }
    return word2
}
console.log(shorter('Tech', 'Global'));
console.log(shorter('hello', 'hi'));

/*
Concat Two String
Write a function named as concat() which takes two string words as arguments and 
returns the words concatenated when invoked.
NOTE: Concatenation should always be as first string + second string .
Examples: concat("Tech", "Global") 
concat("Hello", "World") 
concat("", "abc") 
concat("123", "1234")
-> "TechGlobal" -> "HelloWorld" -> "abc"
-> "1231234"
*/

const concat = (word1, word2) => (word1 + word2);

console.log(concat("Tech", "Global")); 
console.log(concat("Tech", "Global")); 
/*
Starts With Vowel
Write a function named as startsVowel() which takes a string word as an argument and 
returns true if given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
Examples: startsVowel("Tech") 
startsVowel("Apple") 
startsVowel("abc")
-> false -> true -> true
*/

function startsVowel(word) {
    return /^[aeoui]/i.test(word)
}
console.log(startsVowel("Tech"));
console.log(startsVowel("Apple"));
console.log(startsVowel("abc"));




const shorter = (word1, word2)  => {
    if(word1.length < word2.length) 
      return word1
    else {
      return word2
    }
  }
  console.log(shorter("Tech", "Global"));
  console.log(shorter("Hello", "Hi"));
  console.log(shorter("Hello", "World"));