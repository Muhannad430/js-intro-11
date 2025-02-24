/*
Write a function which takes a number and return true if the number is even 
or return false if the number is odd

isEven(4)   -> true
isEven(3)   -> false
isEven(0)   -> true
isEven(-2)  -> true
isEven(-7)  -> false
*/

function isEven(number) {
    return number % 2 === 0; 
}

console.log(isEven(2));
console.log(isEven(-1));
console.log(isEven(5));
console.log(isEven(1000));

/*
Write a function named initials which takes 2 arguments as fname and lname and 
return initials

initials('John', 'Doe')      -> 'J.D.'
initials('Adam', 'Smith')    -> 'A.S.'
initials('Max', 'Smith')     -> 'M.S.'
*/

function initials(fname, lname) {
     return `${fname[0]}.${lname[0]}.`
}
console.log(initials('Muhannad', 'Abusharbak'));
console.log(initials('Adam', 'Smith'));
console.log(initials('John', 'Doe')); 

/*
Write a function named inits which takes a fullname and return initials

inits('John Doe')      -> 'JD'
inits('Adam smith')    -> 'AS'
inits('max Smith')     -> 'MS'
*/

function initials1(fullname) {
    return `${fullname[0]}${fullname[fullname.indexOf(' ') + 1]}`.toUpperCase(); 
}
console.log(initials1('Muhannad Abusharbak')); 

