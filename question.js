function mul(x) {
    return function (y) {
        return function (z) {
            return x * y * z;
        };
    };
}
let val = mul(2);
let arr = ["a", "b"];
console.log(arr);

console.log(val(3)(4));

//associative array?
//memento design pattern in javascript
//functor
