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


/*
Remove Duplicates
Write a function named removeDuplicates() which takes an array argument and returns a new array
with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) removeDuplicates([1, 2, 5, 2, 3]) removeDuplicates([0, -1, -2, -2, -1]) removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) -> [10, 20, 35, 60, 70]
-> [1, 2, 5, 3]
-> [0, -1, -2]
-> ["1", "2", "3"]
*/

function removeDuplicates(arr) {
    let newArr = [];
    for (const target of arr) {
        if (newArr.includes(target)) continue;
        else newArr.push(target);
    }
    return newArr;
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));

/*
No Elements Equals 13
Write a function named no13() which takes an array of numbers as argument and return a new array
with all 13s replaced with 0s.
Examples:
no13([1, 2, 3 ,4]) no13([13, 2, 3]) no13([13, 13, 13 , 13, 13]) no13([]) -> []
-> [1, 2, 3 ,4]
-> [0, 2, 3]
-> [0, 0, 0, 0, 0]
*/

function no13(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 13) {
            newArr.push(arr[i])
        }
        else {
            newArr.push(0);
        }
    }
    return newArr;
}

console.log(no13([13, 2, 3]));
/*
function no13(arr) {
    return arr.map(item => item === 13 ? 0 : item);
}
*/

/*
No Elements Divisible By 3 and 5
Write a function named no3and5() which takes an array of integer numbers as argument and will return
a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99
If element can be divided by 3, replace it with 100
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17]) no3and5([3, 4, 5, 6]) no3and5([10, 11, 12, 13, 14, 15]) -> [7, 4, 11, 23, 17]
-> [100, 4, 99, 100]
-> [99, 11, 100, 13, 14, 101]
*/

function no3and5(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            newArr.push(101);

        } else if (arr[i] % 5 === 0) {
            newArr.push(99);

        } else if (arr[i] % 3 === 0) {
            newArr.push(100);

        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(no3and5([3, 4, 5, 6]));

/*
No Elements With A
Write a function named noA() which takes an array of strings as argument and will return a new array
with all elements starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) -> ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) -> ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) -> ["###", "###", "###", "###", "###"]
*/

function noA(arr) {
    let newArr = [];
    arr.forEach(str => {
        if (str.toLowerCase().startsWith('a')) {
            return newArr.push('###')
        }
        else newArr.push(str);
    });
    return newArr;
}
/*
function noA(arr) {
    return arr.map(str => str.toLowerCase().includes('a') ? '###' : str);
}
*/

console.log(noA(["javascript", "hello", "123", "xyz"]));

/*
Add Two Arrays
Write a function named add() which takes two array of numbers as argument and returns a new array
with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]) add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) add([-5, 6, -3, 11], [5, -6, 3, -11]) -> [9, 3, 2, 7, 5, 10]
-> [16, 11, 9, 3, 2, 7, 5, 10, 34]
-> [0, 0, 0, 0]
*/

function add(arr1, arr2) {
    let longestArr = Math.max(arr1.length, arr2.length);
    let newArr = [];

    for (let i = 0; i < longestArr; i++) {
        let num1 = arr1[i] || 0;
        let num2 = arr2[i] || 0;

        newArr.push(num1 + num2);
    }
    return newArr;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));

/*
FizzBuzz
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed
with below requirements when invoked.

• You need to find all the numbers within the range of given 2 numbers (both inclusive) and store
them in a string from smallest to greatest number with a ' | ' separator for each number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5) -> "Buzz"
fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"
*/

function fizzBuzz(num1, num2) {
    let str = '';

    for (let i = Math.min(num1, num2); i < Math.max(num1, num2) + 1; i++) {
        if (i % 5 === 0 && i % 3 === 0) str += ' FizzBuzz |'
        else if (i % 5 === 0) str += ' Buzz |'
        else if (i % 3 === 0) str += ' Fizz |'
        else str += ` ${i} |`
    }
    return str.slice(0, -2);
}

console.log(fizzBuzz(13, 18));

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
    let words = str.split(' ');
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length <= 3) {
            count++;
        }
    }
    return count;
}

console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));

/*
Middle Number
Write a function named middleInt() which takes three number arguments and return the middle
number.
Examples:
middleInt(1, 2, 2) -> 2
middleInt(5, 5, 8) -> 5
middleInt(5, 3, 5) -> 5
middleInt(1, 1, 1) -> 1
middleInt(-1, 25, 10) -> 10
*/

function middleInt(a, b, c) {
    return [a, b, c].sort((x, y) => x - y)[1];
}

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));

/*
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the
array. For two elements to be considered as duplicated, value and data types of the elements must be
same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])  -> 3 
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ `'foo', 'abc', '123', 'bar ` ]) -> -1
*/

function firstDuplicate(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                return arr[i]
            }
        }
    }
    return -1;
}

console.log(firstDuplicate([`'foo', 'abc', '123', 'bar `]) );
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));

/*
Find All Duplicate Elements
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated
elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no
duplicates in the array. For two elements to be considered as duplicated, value and data types of the
elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) getDuplicates([ 1, 2, 5, 0, 7 ]) getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ 0, -7 ]
-> [ ]
-> [ 'foo', 'a’ ]
-> [ ]
*/

function getDuplicates(arr) {
    
}



/*
Palindrome
Write a function named as isPalindrome() which takes a string word as an argument and returns true if
the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello") -> false
isPalindrome("Kayak") -> true
isPalindrome("civic") -> true
isPalindrome("abba") -> true
isPalindrome("ab a") -> false
isPalindrome("123454321") -> true
isPalindrome("A") -> true
isPalindrome("") -> true
*/

const isPalindrome = word => word.toLowerCase() === word.toLowerCase().split('').reverse().join('');

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));