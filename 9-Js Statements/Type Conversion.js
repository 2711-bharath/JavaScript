// Checking type of 

var str = "String";

console.log(typeof(str)) // output : string
console.log(str.constructor); // output : [Function: String]

var num = 1000;

console.log(typeof(num)) // output : number
console.log(num.constructor); // output : [Function: Number]

var bool = true

console.log(typeof(bool)) // output : boolean
console.log(bool.constructor); // output : [Function: Boolean]

var arr = [1, 2, 3, 4, 5]

console.log(typeof(arr)) // output : object
console.log(arr.constructor); // output : [Function: Array]


/* Type Conversions

    1. Number()
    2. Boolean()
    3. String()
*/

console.log(`Boolean to Number Number(${bool}) is ${Number(bool)}`);

console.log(`Boolean to String String(${bool}) is ${String(bool)}`);
bool = false;
console.log(`Number to String String(${bool}) is ${String(bool)}`);

console.log(`Number to Boolean Boolean(${num}) is ${Boolean(num)}`);
num = 0;
console.log(`Number to Boolean Boolean(${num}) is ${Boolean(num)}`);
num = "0"
console.log(`String to Boolean Boolean(${num}) is ${Boolean(num)}`);