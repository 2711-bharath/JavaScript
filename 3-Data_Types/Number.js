// Methods using number

var n = 12345;

// toString method 
var x = n.toString();
console.log(`(${n}).toString : ${x}`); // output 12345
console.log(`(123+45).toString() : ${(123+45).toString()}`); // output 168
console.log(`(123).toString+(45).toString() : ${(123).toString()+(45).toString()}`); // output 12345

// toExponential method
console.log(`${(1.2345)}.toExponential(0) : ${(1.2345).toExponential(0)}`); // output 1e+2
console.log(`${(1.2345)}.toExponential(2) : ${(1.2345).toExponential(2)}`); // output 1.23e+2
console.log(`${(1.2345)}.toExponential(4) : ${(1.2345).toExponential(4)}`); // output 1.2345e+4

// toFixed Method
console.log(`${(123.45)}.toFixed(0) : ${(123.45).toFixed(0)}`); // output 123
console.log(`${(123.45)}.toFixed(2) : ${(123.45).toFixed(2)}`); // output 123.45
console.log(`${(123.45)}.toFixed(4) : ${(123.45).toFixed(4)}`); // output 123.4500

// toPrecision Method
console.log(`${(1.2345)}.toPrecision() : ${(1.2345).toPrecision()}`); // output 1.2345
console.log(`${(1.2345)}.toPrecision(2) : ${(1.2345).toPrecision(2)}`); // output 1.2
console.log(`${(1.2345)}.toPrecision(4) : ${(1.2345).toPrecision(4)}`); // output 1.234

// Number() Method
console.log(`Number(true) : ${Number(true)}`)
console.log(`Number(false) : ${Number(false)}`)
console.log(`Number(10.33) : ${Number(10.33)}`)

// Number Properties
var x = Number.MAX_VALUE;
console.log("Maximum value : ", x);
x = Number.MIN_VALUE;
console.log("Minimum value : ", x);
x = Number.POSITIVE_INFINITY;
console.log("Positive Infinity value : ", x);
x = 1 / 0;
console.log("Positive Infinity value : ", x);
x = Number.NEGATIVE_INFINITY;
console.log("Negative Infinity value : ", x);
x = -1 / 0;
console.log("Negative Infinity value : ", x);