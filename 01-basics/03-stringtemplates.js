// ex1
const person = {
    fname: 'John',
    lname: 'Doe',
    age: 25
};

// John Doe will be 30 after 5 years? 
let years = 7; 

console.log(person.fname + ' ' + person.lname + ' will be ' + (person.age + years) + ' after ' + years + ' years.'); 

console.log(`${person.fname} ${person.lname} will be ${person.age + years} after ${years} years.`); 

// ex2 
let price = 2.5; 
let quantity = 10; 

console.log(`the total price is = $${price * quantity}`); 