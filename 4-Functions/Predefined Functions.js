/*
Eval - Evaluates a string and return a value
Syntax:
    eval(expression)

ParseInt - Parses a string argumnet and returns an integer of the specified radix or base
Syntax:
    parseInt(string)

ParseFloat - Parses a string argumnet and returns a floating point number
Syntax:
    parseFloat(string)

Escape - Returns the hexadecimal encoding of an argument
Syntax:

Unescape - Returns the ASCII string for specified value
Syntax:

*/

let x = 2;
let y = 3;
let z = 4;

console.log(eval("x + y"))
console.log(eval("x*y*z"))

console.log(`Parse Int(${y}/${x}) = ${parseInt(y / x)}`);
console.log(`Parse Float(${y}/${x}) = ${parseFloat(y / x)}`);

text1 = "Hi, my name is Bharath"
console.log(`escape(${text1}) = ${escape(text1)}`);

text2 = escape(text1)
console.log(`unescape(${text2}) = ${unescape(text2)}`);