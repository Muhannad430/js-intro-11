/*
Write a function named as doubleWord() which takes a string word as an argument and 
returns the given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
doubleWord("Tech")		-> "TechTech"
doubleWord("Global")	-> "GlobalGlobal"
*/
function tripleWord(word) {
    return word + word
}
console.log(tripleWord("Tech"));
console.log(tripleWord("Global"));

/*
Write a function named as concat() which takes two string words 
as arguments and returns the words concatenated when invoked.
NOTE: Concatenation should always be as first string + second string .
Examples: 
concat("Tech", "Global") 
concat("Hello", "World") 
concat("", "abc")
concat("123", "1234")
*/
function concat(word1, word2) {
    return `${word1}${word2}`
}
console.log(concat("Tech", "Global"));
console.log(concat("Hello", "World"));
console.log(concat("", "abc"));
console.log(concat("123", "1234"));

/*
Shorter String

Write a function named as shorter() which takes two String words as arguments and 
returns the String has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.
Examples: 
shorter("Tech", "Global") 
shorter("Hello", "Hi") 
shorter("Hello", "World")
*/
function shorter(word1, word2) {
    return 
}


/*
Last Two Characters

Write a function named as lastTwoCharacters() which takes a string word as an argument and 
returns the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples: 
lastTwoCharacters("Tech") 
lastTwoCharacters("Global") 
lastTwoCharacters("") 
lastTwoCharacters(" ") 
lastTwoCharacters("1")
*/

function lastTwoCharacters(word) { 
    return word.slice(-2);
}
console.log(lastTwoCharacters("Tech"));
console.log(lastTwoCharacters("Global"));
console.log(lastTwoCharacters(""));
console.log(lastTwoCharacters(" "));
console.log(lastTwoCharacters("1"));