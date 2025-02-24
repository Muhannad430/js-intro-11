/*
function evenOdd(number) {
  return number % 2 === 0 ? 'EVEN' : 'ODD'; 
}

console.log(evenOdd(2));
console.log(evenOdd(3));


function posNegZero(number) {

}
*/

const posNegZero = (number) => number < 0 ? 'NEG' : number > 0 ? 'POS' : 'ZERO'

console.log(posNegZero(0));
console.log(posNegZero(-5));
console.log(posNegZero(19));


/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
startE('John') -> false
*/

const startE = (name) => name.toLowerCase().startsWith('e')

console.log(startE('Emily'));
console.log(startE('emily'));
console.log(startE('Alex'));
console.log(startE('John'));
console.log(startE(''));

/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/

const divisible5 = (number) => number % 5 === 0

console.log(divisible5(7));
console.log(divisible5(0));
console.log(divisible5(10));
console.log(divisible5(99));

/*
fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/

const fooBar = (number) => number % 5 === 0 && number % 7 === 0 ? 'foobar' : number % 5 === 0 ? 'foo' : number % 7 === 0 ? 'bar' : number

console.log(fooBar(2));
console.log(fooBar(5));
console.log(fooBar(14));
console.log(fooBar(35));