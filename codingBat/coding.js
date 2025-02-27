function comboString(a, b) {
    if (a.length <= b.length) {
        return a + b + a
    }
    return b + a + b
}

console.log(comboString('hello', 'hi'));


function right2(word) {
    if (word.length <= 2) {
        return word
    }
    return word.slice(-2) + word.slice(0, -2)
}

console.log(right2('hello'))
console.log(right2('java'))
console.log(right2('hi'))


function middleTwo(word) {
    let mid = word.length / 2
    return word[mid - 1] + word[mid]
}

function twoChar(str, index) {
    if (index + 2 > str.length) {
        return str.slice(0, 2)
    }
    return str.slice(index, index + 2)
}
console.log(twoChar('java', 0))


function sleepIn(weekday, vacation) {
    if (weekday === false || vacation === true) {
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
    if (n <= 21) {
        return 21 - n
    }
    else {
        return (21 - n) * 2
    }
}


function parrotTrouble(talk, hour) {
    if (talk === true && (hour < 7 || hour > 20)) {
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
    if ((a < 0 && b > 0 || a > 0 && b < 0) && (boolen === true || boolen === false)) {
        return true
    }
    else {
        return (a < 0 && b < 0)
    }
}
//
function notString(str) {
    if (str.startsWith('not')) {
        return str
    }
    else {
        return 'not ' + str
    }
}
//
function missingChar(str, number) {
    return str.slice(0, number) + str.slice(number + 1)
}
//
function frontBack(str) {
    if (str.length <= 1) {
        return str
    }
    return str.at(-1) + str.slice(1, -1) + str[0]
}
//
function front3(str) {
    return str.slice(0, 3) + str.slice(0, 3) + str.slice(0, 3)
}
//
function startHi(str) {
    return str.startsWith('hi');
}
//
function icyHot(number1, number2) {
    if ((number1 < 0 && number2 > 100) || (number1 > 100 && number2 < 0)) {
        return 'true'
    }
    else {
        return false;
    }
}
//
function in1020(num1, num2) {
    return (num1 >= 10 && num2 <= 20) || (num1 >= 10 && num2 <= 20)
}
//
function loneTeen(a, b) {
    const isTeen = num => (num) >= 13 && num <= 19;

    return isTeen(a) !== isTeen(b);
}
//
function delDel(str) {
    if (str.length >= 4 && str.slice(1, 4) === 'del') {
        return str.slice(0, 1) + str.slice(4);
    }
    else {
        return str
    }
}
//
function mixStart(str) {
    if (str.length >= 3 && str.slice(1, 3) === 'ix') {
        return true
    }
    else {
        return false
    }
}
//
function startOz(str) {
    let result = '';

    if (str[0] === 'o') {
        result += str[0];
    }
    if (str[1] === 'z') {
        result += str[1];
    }
    return result;
}
//
function intMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
//
function close10(a, b) {
    let diffA = Math.abs(a - 10);
    let diffB = Math.abs(b - 10);

    if (diffA < diffB) {
        return a;
    }
    else if (diffB < diffA) {
        return b;
    }
    else {
        return 0;
    }
}
//
function in3050(a, b) {
    if (a >= 30 && a <= 40 && b >= 30 && b <= 40) {
        return true;
    }
    if (a >= 40 && a <= 50 && b >= 40 && b <= 50) {
        return true;
    }
    return false;
}
//
function max1020(a, b) {
    if (a >= 10 && a <= 20 && b >= 10 && b <= 20) {
        return Math.max(a, b);
    }
    else if (a < 10 || a > 20 && (b >= 10 && b <= 20)) {
        return b
    }
    else if (b < 10 || b > 20 && (a >= 10 && a <= 20)) {
        return a
    }
    else return 0
}
// 
function stringE(str) {
    let count = 0;
    for (let char of str) {
        if (char === 'e') {
            count++;
        }
    }
    return count >= 1 && count <= 3;
}

//

function lastDigit(a, b) {
    return a % 10 === b % 10
}

//

function endUp(str) {
    if (str.length <= 3) {
        return str.toUpperCase();
    }
    let cut = str.length - 3;
    let front = str.slice(0, cut);
    let back = str.slice(cut);

    return front + back.toUpperCase();

}

//

function everyNth(str, num) {
    let result = '';
    for (let i = 0; i < str.length; i += num) {
        result += str[i];
    }
    return result;
}

function stringTimes(str, num) {
    return str.repeat(num);
}

function frontTimes(str, num) {
    if (str.length > 3) {
        return str.slice(0, 3).repeat(num)
    }
    else {
        return str.repeat(num)
    }
}

let str = "xxx"
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
        count++
    }
}

function doubleX(str) {
    const index = str.indexOf('x');
    return index !== -1 && str[index + 1] === 'x';
}

function stringBits(str) {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
        result += str[i];
    }
    return result;
}

function stringSplosion(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str.slice(0, i + 1);
    }
    return result;
}

function arrayCount9(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 9) {
            count++;
        }
    }
    return count;
}

function arrayFront9(arr) {
    for (let i = 0; i < 4; i++) {
        if (arr[i] === 9) {
            return true
        }
    }
    return false
}

function array123(arr) {
    for (let i = 0; i < (arr.length - 2); i++) {
        if (arr[i] === 1 && arr[i + 1] === 2 && arr[i + 2] === 3) {
            return true
        }
    }
    return false
}

function stringMatch(a, b) {
    let count = 0;
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] === b[i] && a[i + 1] === b[i + 1]) {
            count++
        }
    }
    return count;
}

function stringX(str) {
    if (str.length <= 1) return str;
    let start = str[0] === 'x' ? 'x' : '';
    let end = str[str.length - 1] === 'x' ? 'x' : '';

    let middle = str.slice(1, str.length - 1).replace(/x/g, '');

    return start + middle + end;
}

function altPairs(str) {
    let string = '';
    
    for (let i = 0; i < str.length; i += 4) {
        string += str[i]
        if (i + 1 < str.length) {
            string += str[i + 1]
        }
    }
    return string
}
console.log(altPairs("kitten"));
console.log(altPairs("Chocolate"));
console.log(altPairs("CodingHorror"));

