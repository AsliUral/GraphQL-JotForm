function multply2(x) {
    return 2 * x;
}

function add3(x) {
    return 3 + x;
}

function multply4(x) {
    return 4 * x;
}
console.log(multply4(2));

function compose(...arrayFunctions) {
    return function (...args) {
        return arrayFunctions.reduce(
            (prevValue, currentValue) => currentValue(prevValue),
            args
        );
        // let result = args
        // console.log(result);
        // for (let i = 0; i < arrayFunctions.length; i++) {
        //     const currentFunction = arrayFunctions[i];
        //     result = currentFunction(args);
        // }
    };
}


/*


const { compose } = require('redux');


function multply2(x) {
    return 2 * x;
}

function add1(x) {
    return 1 + x;
}

function multply4(x) {
    return 4 * x;
}
// console.log(multply4(2));

const composee = (...xs) => x => xs.reduceRight((acc, f) => f(acc), x)

function compose_(...arrayFunctions) {
    return function (x) {
        // return arrayFunctions.reduceRight(
        //     (acc, f) => f(acc),
        //     x
        // );
        let result = x;
        //console.log(result);
        for (let i = arrayFunctions.length -1 ; i >= 0 ; i--) {
            const currentFunction = arrayFunctions[i];
            result = currentFunction(result);
        }
        return result;
    };
}

const combineFunction = compose_(add1, multply2);
console.log(combineFunction(2));


*/

const combineFunction = compose(add3, multply4);
console.log(combineFunction(2));

// Refactor `fastestCar` using `compose()` and other functions in pointfree-style.

// fastestCar :: [Car] -> String
const fastestCar = (cars) => {
    const sorted = sortBy((car) => car.horsepower, cars);
    const fastest = last(sorted);
    return concat(fastest.name, " is the fastest");
};

// const fastestCar = compose(
//     append(" is the fastest"),
//     prop("name"),
//     last,
//     sortBy(prop("horsepower"))
// );

// ************************************************************************************ //

function pipeFunction(...arrayFunctions) {
    return function (x) {
        let result = x;
        for (let func of arrayFunctions) {
            result = func(result);
        }

        return result;
    };
}

console.log(pipeFunction(add3, multply4)(2));

/***********************************************************************
 *
 * Implement the function uniqueInOrder which takes as argument a sequence and
 * returns a list of items without any elements with the same value next to each
 * other and preserving the original order of elements.
 *
 * For example:
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 * uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
 * uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 **********************************************************************/

var uniqueInOrderMe = function (iterable) {
    var result = [];
    for (var i = 0, length = iterable.length; i < length; i++) {
        if (
            iterable.indexOf(iterable[i]) !== iterable.indexOf(iterable[i + 1])
        ) {
            result.push(iterable[i]);
        }
    }
    return result;
};

let uniqueInOrder = (iterable) => {
    return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
///*********************************************************************** //


/**
 * 
 * // const isDiffByPrev :: a -> Number -> [a] -> Bool
const isDiffByPrev = (a, i, xs) => a !== xs[i - 1];

let uniqueInOrder = (xs) => [...xs].filter(isDiffByPrev);

uniqueInOrder([1, 2, 2, 3, 3])

*/

// function closure nedir? -inner function

let add = function (val) {
    let inner = 2;
    return val + inner;
};

const a = 2;

let add2 = function () {
    return 2 + a;
};

console.log(add(2));

console.log(add2());

function makeFunc() {
    var name = "asli";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

///*********************************************************************** //

//makro-mikro tasks

console.log("start");
setTimeout(() => {
    console.log("setTimeout");
});
Promise.resolve().then(() => {
    console.log("resolve");
});
console.log("end");

///*********************************************************************** //
