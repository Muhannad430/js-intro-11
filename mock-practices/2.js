/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if the string length is even or doubled if the string length is odd when
invoked.
Examples:
doubleOrTripleWord("Tech") -> "TechTechTech"
doubleOrTripleWord("Apple") -> "AppleApple”
doubleOrTripleWord("") -> ""
doubleOrTripleWord(" ") -> " "
doubleOrTripleWord("1") -> "11"
doubleOrTripleWord("22") -> "222222"
*/

function doubleOrTripleWord(str) {
    if (str.length % 2 === 0) return str + str
    else return str.repeat(3)
}

/*
First and Last Word
Write a function named as firstlastWord() which takes a string word as an argument and returns the
first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
Examples:
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript") -> "IJavaScript”
firstLastWord("Hello") -> "HelloHello"
firstLastWord("") -> ""
firstLastWord(" ") -> ""
*/

function firstlastWord(str) {
    let arr = str.split(' ');
    return arr[0] + arr[arr.length - 1];
};

/*
Has Vowel
Write a function named hasVowel() which takes a string argument and returns true if the string has a
vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") -> false
hasVowel("Javascript") -> true
hasVowel("Tech Global") -> true
hasVowel("1234") -> false
hasVowel("ABC") -> true
*/
function hasVowel(str) {
    return /[aeoui]/i.test(str)
};

/*
Start Vowel
Write a function named as startVowel() which takes a string word as an argument and returns true if
given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
17
Examples:
startVowel("Hello") -> false
startVowel("Apple") -> true
startVowel("orange") -> true
startVowel("") -> false
startVowel(" ") -> false
startVowel("123") -> false
*/

function startVowel1(str) {
    return /^[aeoui]/i.test(str)
};

function startVowel2(str) {
    return 'aeiouAEIOU'.includes(str[0])
};

/*
Average of Edges
Write a function named averageOfEdges() which takes three number arguments and will return
average of min and max numbers.
Examples:
averageOfEdges(0, 0, 0) -> 0
averageOfEdges(0, 0, 6) -> 3
averageOfEdges(-2, -2, 10) -> 4
averageOfEdges(-3, 15, -3) -> 6
averageOfEdges(10, 13, 20) -> 15
*/

function averageOfEdges(num1, num2, num3) {
    return (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2
}

/*
Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new string with
the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") -> ""
replaceFirstLast("Hello") -> "oellH"
replaceFirstLast("Tech Global") -> "lech GlobaT"
replaceFirstLast("A") -> ""
replaceFirstLast(" A ") -> ""
*/

function replaceFirstLast(str) {
    if (str.trim().length < 2) {
        return '';
    }
    else {
        return str.at(-1) + str.slice(1, -1) + str[0]
    }
}

/*
Swap First and Last Four Characters
Write a function named as swap4() which takes a string word as an argument and returns the string
back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
18
www.techglobalschool.com
Examples:
swap4("abc") -> ""
swap4("JavaScript") -> "riptScJava"
swap4("TechGlobal") -> "obalGlTech"
swap4("") -> ""
swap4(" ") -> ""
swap4("Apple") -> ""
*/

function swap4(str) {
    if (str.length <= 8) {
        return '';
    }
    let firstFour = str.slice(0, 4);
    let lastFour = str.slice(-4);
    let middle = str.slice(4, -4);

    return lastFour + middle + firstFour;
}

/*
Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns
the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
Examples:
swapFirstLastWord("Hello World") -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") -> "bar bar foo foo"
swapFirstLastWord("") -> ""
swapFirstLastWord(" ") -> ""
swapFirstLastWord("Hello") -> ""
swapFirstLastWord("Hello ") -> ""
*/

function swapFirstLastWord(str) {
    let word = str.split(' ');

    if (word.length <= 1) {
        return '';
    }
    let temp = word[0];
    word[0] = word[word.length - 1];
    word[word.length - 1] = temp;

    return word.join(' ');
}

/*
Count Positive Numbers
Write a function named countPos() which takes an array of numbers as an argument and returns how
many elements are positive when invoked.
Examples:
countPos([-45, 0, 0, 34, 5, 67]) countPos([-23, -4, 0, 2, 5, 90, 123]) countPos([0, -1, -2, -3]) -> 3
-> 4
-> 0
*/

function countPos(arr) {
    return arr.filter(num => num > 0).length;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));

/*
Find Even Numbers
Write a function named as getEvens() which takes 2 number arguments and returns all the even
numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even
numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
19
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]
*/

function getEvens(num1, num2) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let evens = [];

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        }
    }
    return evens;
}
console.log(getEvens(2, 7));

/*
Find Numbers Divisible By 5
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers
divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no
numbers divisible by 5 in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/

function getMultipleOf5(num1, num2) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let by5 = [];

    for (let i = start; i <= end; i++) {
        if (i % 5 === 0) {
            by5.push(i);
        }
    }
    return by5;
}
console.log(getMultipleOf5(3, 17));

/*
Count Negative Numbers
Write a function named countNeg() which takes an array of numbers as an argument and returns how
many elements are negative when invoked.
Examples:
countNeg([-45, 0, 0, 34, 5, 67]) countNeg([-23, -4, 0, 2, 5, 90, 123]) countNeg([0, -1, -2, -3]) -> 1
-> 2
-> 3
*/

function countNeg(array) {
    return array.filter(num => num < 0).length;
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]));
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]));

/*
Count A
Write a function named countA() which takes a string argument and returns how many A or a there are
in the given string when invoked.
NOTE: Ignore case sensitivity.
Examples:
countA("TechGlobal is a QA bootcamp") countA("QA stands for Quality Assurance") -> 4
-> 5
countA("Cypress") -> 0
*/

function countA(str) {
    let count = 0;
    const lowCase = str.toLowerCase();

    for (let i = 0; i < lowCase.length; i++) {
        if (lowCase[i] === 'a') {
            count++;
        }
    }

    return count;
}

console.log(countA("TechGlobal is a QA bootcamp"));

/*
Count Words
Write a function named countWords() which takes a string argument and returns the total count of
words in the given string when invoked.
NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords(" Javascript is fun ") countWords("Cypress is an UI automation tool. ") -> 6
countWords("1 2 3 4") -> 3
-> 4
*/

function countWords(str) {
    let words = str.trim().split(' ');

    return words.length === 1 && words[0] === "" ? 0 : words.length;
}

console.log(countWords(" Javascript is fun "));
console.log(countWords("Cypress is an UI automation tool. "));

/*
Factorial
Write a function named as factorial() which takes a number as an argument and returns the factorial of
the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5) -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/

const factorial = num => {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}

console.log(factorial(5));
console.log(factorial(4));

/*
Count 3 or Less
Write a function named as count3OrLess() which takes a string word as an argument and returns the
count of the words that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello") -> 0
count3OrLess("Hi John") -> 1
count3OrLess("JavaScript is fun") -> 2
count3OrLess("My name is John Doe") -> 3
count3OrLess("") -> 0
*/

function count3OrLess(str) {
    let words = str.trim().split(' ');
    let count = 0;

    for (let word of words) {
        if (word.length <= 3) {
            count++;
        }
    }
    return count;
}

console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess("Hi John"));

/*
Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument and
returns the string back with all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello") -> "Hello"
removeExtraSpaces(" Hello World ") -> "Hello World"
removeExtraSpaces(" JavaScript is fun") -> "JavaScript is fun”
removeExtraSpaces("") -> ""
*/

function removeExtraSpaces(str) {
    return str.replaceAll(/\s+/g, ' ')
}

console.log(removeExtraSpaces("   Hello    World     "));