console.log('\n--------TASK01--------\n');
/*
Requirement:
Write a function named countVC() which takes a string argument and returns an object with the count of vowels and consonants.
Examples:
countVC("Hello")​             		-> {vowels: 2, consonants: 3}
countVC("Programming")​ 	-> {vowels: 3, consonants: 8}
countVC("123AbC")​             	-> {vowels: 1, consonants: 2}
countVC("123!@#xyz")​           	-> {vowels: 0, consonants: 3}
countVC("")​                         	-> {vowels: 0, consonants: 0}
*/

function countVC(str) {
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            if ('aeiouAEIOU'.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    return { vowels: vowelCount, consonants: consonantCount }
};


console.log(countVC("Hello"));
console.log(countVC("Programming"));

console.log('\n--------TASK02--------\n');
/*
Requirement:
Write a function named countChars() which takes a string argument and returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any category
Examples:
countChars("Hello")​                         	-> {letters: 5}
countChars("Programming 123")​ 	-> {letters: 11, numbers: 3}
countChars("123AbC!@#")​             	-> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")​             	-> {numbers: 10}
countChars("     ")​                                	-> {}
countChars("")​                                     	-> {}
*/

function countChars(str) {
    let lettersCount = 0;
    let numbersCount = 0;
    let specialsCount = 0;
    for (let ele of str) {
        if (ele.toLowerCase() >= 'a' && ele.toLowerCase() <= 'z') lettersCount++
        else if (/[0-9]/i.test(ele)) numbersCount++
        else if (/[^a-zA-Z0-9\s]/.test(ele)) specialsCount++
    }
    const result = {};
    if (lettersCount > 0) result.letters = lettersCount;
    if (numbersCount > 0) result.numbers = numbersCount;
    if (specialsCount > 0) result.specials = specialsCount;

    return result;
}

console.log(countChars("123AbC!@#"));
console.log(countChars("0987654321"));


console.log('\n--------TASK03--------\n');
/*
Requirement:
Write a function named maxOccurrences() which takes a string argument and returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is case sensitive. 
Ignore spaces. If the string is empty or consist of spaces only, then return an empty string.
Examples:
maxOccurrences("Hello")​           	-> "l"
maxOccurrences("Occurrences") 	-> "c"
maxOccurrences("    ab    ")​    	-> "al"
maxOccurrences("12   3   21")   	-> "1"
maxOccurrences("      ")   ​ 	-> ""
maxOccurrences("")   		-> ""
*/

function maxOccurrences(str) {
    str = str.replace(/\s/g, '')
    let result = '';
    let max = 0;
    let obj = {};

    for (let i of str) {
        if (i in obj) {
            obj[i] += 1
        }
        else obj[i] = 1
    }
    for (let j in obj) {
        if (obj[j] > max) {
            max = obj[j]
            result = j
        }
    }
    return result;
}

console.log(maxOccurrences("Hello"));


console.log('\n--------TASK04--------\n');
/*
Requirement:
Write a function named starOut() which takes a string argument and returns it back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd") 	-> "ad"
starOut("ab**cd") 	-> "ad"
starOut("xm*sm*sy") 	-> "xy"
starOut("abc")   ​	-> "abc"
starOut("***")   	-> ""
starOut("   ")   ​ 	-> "   "
starOut("")   	-> ""
*/

function starOut(str) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '*' || str[i - 1] === '*' || str[i + 1] === '*') {
            continue;
        }
        else newStr += str[i]
    }
    return newStr;
}

console.log(starOut("ab**cd"));
console.log(starOut("ab*cd"));

console.log('\n--------TASK05--------\n');
/*
Requirement:
Write a function named romanToInt() which takes a string roman numeral as its arguments and return the roman numeral converted to the number. 
A roman numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I") 		-> 1
romanToInt("IV") 		-> 4
romanToInt("CXII") 		-> 112
romanToInt("MMM") 		-> 3000
romanToInt("MMMDCCCLXXXVIII")  	-> 3888
romanToInt("MDCLXVI")  	​-> 1666
*/


function romanToInt(str) {
    let total = 0;
    const arr = str.split('');
    const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    for (let i = 0; i < str.length; i++) {
        if (romanNumerals[arr[i]] < romanNumerals[arr[i + 1]]) {
            total += romanNumerals[arr[i + 1]] - romanNumerals[arr[i]]
        }
        else total += romanNumerals[arr[i]]

    }
    return total;
}

console.log(romanToInt("CXII"));
