const { getRandomNumber } = require ('../utils/MathHelper.js')

let rand = Math.floor(Math.random() * 3) + 1

/*
IF - ELSE STATEMENT:

let rand = Math.floor(Math.random() * 3) +1
console.log(rand);

if(rand === 1) {
    console.log('ONE');
}
else if(rand === 2) {
    console.log('TWO');
}
else{
    console.log('THREE');
}
*/

// SWITCH:

switch(rand) {
    case 1:
        console.log('ONE');
        break;
    case 2:
        console.log('TWO');
        break;
    default:
        console.log('THREE');
}