function comboString (a, b) {
    if (a.length <= b.length) {
        return a + b + a
}
    return b + a + b 
}

console.log(comboString('hello', 'hi'));


function right2(word) {
    if(word.length <= 2){
        return word
    }
    return word.slice(-2) + word.slice(0, -2)
}

console.log(right2('hello'))
console.log(right2('java'))
console.log(right2('hi'))


function middleTwo (word) {
    let mid = word.length / 2
    return word[mid - 1] + word[mid]
}

function twoChar(str, index) {
    if(index + 2 > str.length) {
        return str.slice(0, 2)
    }
    return str.slice(index , index + 2)
}
console.log(twoChar('java', 0))


function sleepIn(weekday, vacation) {
    if(weekday === false || vacation === true){
        return true
    }
else {
    return false
}
}
console.log(sleepIn(false, false));
console.log(sleepIn(true, false));
console.log(sleepIn(false, true));


function diff21(n) {
    if(n <= 21){
        return 21 - n
    }
    else{
        return (21 - n) * 2
    }
}


function parrotTrouble(talk, hour) {
    if(talk === true && (hour < 7 || hour > 20)) {
        return true
    }
    else {
        return false
    }
}

function makes10(a, b) {
    return (a === 10 || b === 10 || a + b === 10)
}

function nearHundred(number) {
    return (number >= 90 && number <= 110) || (number >= 190 && number <= 210)
}

function posNeg(a, b, boolen) {
     if((a < 0 && b > 0 || a > 0 && b < 0 ) && (boolen === true || boolen === false)){
        return true
     }
     else {
        return (a < 0 && b < 0)
     }
}

function notString(str) {
    if(str.startsWith('not')){
    return str        
    }
    else {
        return 'not ' + str
    }
}

function missingChar(str, number) {
    return str.slice(0, number) + str.slice(number + 1)
}

function frontBack(str) {
    if(str.length <= 1 ){
        return str
    }
    return str.at(-1) + str.slice(1, -1) + str[0]
}

function front3(str) {
    return str.slice(0, 3) + str.slice(0, 3) + str.slice(0, 3)
}

function startHi(str) {
    return str.startsWith('hi');
}

function icyHot(number1, number2) {
    if((number1 < 0 && number2 > 100) || ( number1 > 100 && number2 < 0)) {
        return 'true'
    }
    else {
        return false;
}
}

function in1020(num1, num2) {
    return (num1 >= 10 && num2 <= 20) || (num1 >= 10 && num2 <= 20)
}
/*
function hasTeen(num1, num2, num3) {
    return (num1 === 10 || num2 === 10 || num3 === 10)
}

function loneTeen(num1, num2) {
    return ((num1 >= 13 && num2 <= 19) || (num1 <= 19 && num2 >= 13) || num1 !== num2) 
}
*/
function loneTeen(a, b) {
    const isTeen = num => (num) >= 13 && num <= 19;
    
    return isTeen(a) !== isTeen(b);
  }

  