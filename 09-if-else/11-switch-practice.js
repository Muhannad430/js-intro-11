/*
const date = new Date();

let dayOfTheWeek = date.getDay(); // 0-sunday 6-saturday

/*
Write a program that tells if the day is WEEKEND or a WEEKDAY
0 or 6 -> WEEKEND 
1-5    -> WEEKDAY
*/

const date = new Date();

let dayOfTheWeek = date.getDay();

console.log(dayOfTheWeek); 

/*
if(dayOfTheWeek === 0 || dayOfTheWeek === 6) {
        console.log('WEEKEND')
}
else {
    console.log('WEEKDAY')
}
*/

switch(dayOfTheWeek) {
    case 0:
    case 6:
    console.log('WEEKEND');
    break;
    default: 
    console.log('WEEKDAY');
}
