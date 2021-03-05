/*
Syntax : 

function functionName(params) {
    function Body
}

*/

function square(num) {
    return num * num;
}

let num = 10;
let sqr = square(num);

console.log(`Square of ${num} is ${sqr} `);


function add(num1, num2) {
    return num1 + num2;
}

let num1 = 15;
let num2 = 20;
let sum1 = add(num1, num2);

console.log(`Sum of ${num1} and ${num2} is ${sum1} `);