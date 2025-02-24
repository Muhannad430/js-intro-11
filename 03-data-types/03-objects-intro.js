// objects 

const person = {
    fname: 'John', 
    lname: 'Doe',
    age: 45,
    vip: false 
};

console.log(person); // { fname: 'John', lname: 'Doe', age: 45, vip: false }
console.log(typeof person); // object 

// fname 
let fname = person.fname; 

console.log(fname); // John 
console.log(typeof fname); // string

console.log(typeof person.age); // number 

// how to access the properties of an object using 






const program = {
    name: 'SDET',
    start: 'Jan 20, 2025',
    duration: '6 months'
};

console.log(program); 

program.start = 'Jan 27, 2025';
program['duration'] = '7 months'; 

console.log(program);



const student = {
    fullName: 'Muhannad Abusharbak', 
    courses: ['math', 'science'],
    add: {
        street: '1234 abc st',
        number: 'null', 
        city: 'Chicago',
        state: 'IL', 
        ZIP: '12345'
    }
}

console.log(student); 

// adding a property to an existing object: 
student.age = 25; 

console.log(student); 

// remove some properties from an existing object: 
delete student.address; 
delete student['age']; 