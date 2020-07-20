//It should look like this:

//Sam Harris => S.H
//Patrick Feeney => P.F
//abbrevName("josé antonio");

function abbrevNameMe(name) {
    let i = name.indexOf(" ");
    let first = name.substring(0, i);
    let last = name.substring(i + 1);
    let abbrev =
        first.charAt(0).toUpperCase() + "." + last.charAt(0).toUpperCase();

    return abbrev;
}

const abbrevName = (name) => name.match(/\b\w/g).join(".").toUpperCase();

const abbrevName_ = (name) =>
    name.split` `.map((part) => part[0].toUpperCase()).join(".");

//////////////////////////////////////////////////////////////////////

/*

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

function litresMe(time) {
    let value = time * 0.5;

    return Math.floor(value);
}
litres = (t) => ~~(t / 2);

/////////////////////////////////////////////////////////////////////////////////

/*

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

*/

function findUniqMe(arr) {
    uniqueNumber = [];
    var sortedArr = arr.sort(function (a, b) {
        return a - b;
    });

    for (i = 0; i < sortedArr.length; i++) {
        if (
            sortedArr[i] !== sortedArr[i + 1] &&
            sortedArr[i] !== sortedArr[i - 1]
        ) {
            uniqueNumber.push(sortedArr[i]);
        }
    }

    return uniqueNumber[0];
}

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0];
}

function find_Uniq(arr) {
    return +arr.filter((value) => {
        return arr.indexOf(value) == arr.lastIndexOf(value);
    });
}

const find__Uniq = (arr) =>
    arr.filter((a) => a !== arr[+(arr[1] === arr[2])])[0];

///////////////////////////////////////////////////////////////////////////////////////

function highAndLowMe(numbers) {
    let num = [];
    let tempy = "";
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.charAt(i) !== " ") {
            tempy += numbers.charAt(i);
        } else {
            console.log(tempy);
            num.push(tempy);
            tempy = "";
        }
        if (i == numbers.length - 1) {
            num.push(tempy);
        }
        num.sort(function (a, b) {
            return a - b;
        });
    }

    return num[num.length - 1] + " " + num[0];
}

const highAndLow = (l) => {
    let r = l.split(" ").map(Number);
    return `${Math.max(...r)} ${Math.min(...r)}`;
};

///////////////////////////////////////////////////////////////////////////////
//How to empty an array in JavaScript?
var arrayList = ["a", "b", "c", "d", "e", "f"];

arrayList = [];
arrayList.length = 0;
///////////////////////////////////////////////////////////////////////////

var foo = function () {
    // Some code
};
function bar() {
    // Some code
}
/////////////////////////////////////////////////////////////////////////////////

// What is the difference between Imperative and Declarative in React?

//////////////////////////////////////////////////////////////////

function display() {
    console.log(10 + 20 + "30");
    console.log("10" + 20 + 30);
}
display();

/////////////////////////////////////////////////////////////

var output = (function (x) {
    delete x;
    return x;
})(0);

console.log(output);

///////

//Object.freeze ile const farkı

const person = {
    firstName: "Asli",
    lastName: "Ural",
};

let person2 = {
    firstName: "Asli",
    lastName: "Ural",
};

const person3 = {
    firstName: "a",
    lastName: "a",
};

// person = person3;

Object.freeze(person2);
person2 = person3;
console.log(person2.firstName);

//////////////////////////////////////////////////////
//not parseInt Multiply Strings

var multiply = function (num1, num2) {
    num1 = num1 - 0;
    num2 = num2 - 0;
    var result = num1 * num2;
    result = result + "";
    return result;
};

console.log(multiply("2", "3")); /// "6"


const multiply = (num1, num2) {
    return String(Number(num1) * Number(num2));
};
