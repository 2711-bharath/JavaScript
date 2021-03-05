/*

JavaScript has 5 Primitive Data Types - 
1. Undefined
2. Boolean
3. Number
4. String
5. Null

JavsScript has 3 Non-Primitive Data Types - 
1. Objects
2. Array
3. RegExp

*/

var rollNo = 590;
var userName = "Bharath";
var x = null;
var bool = true;

console.log(`Not defined hello variable so it's type is ${typeof(hello)}`)
console.log(`Type of ${rollNo} is ${typeof(rollNo)}`);
console.log(`Type of ${userName} is ${typeof(userName)}`);
console.log(`Type of ${x} is ${typeof(x)}`); // null means nothing so in JS null is an object
console.log(`Type of ${bool} is ${typeof(bool)}`);

var obj = {
    Name: "Bharath",
    Rollno: 590,
    Depatment: "CSE",
    Section: "B",
    college: "VNR VJIET"
}

var arr = [1, 2, 3, 4, 5, 6, 7];
var arr1 = ["Hi", "Hello", "Welcome", "Good Morning"];

var patt = /Hello/i;

console.log(`Type of ${obj} is ${typeof(obj)}`);
console.log(`Type of ${arr} is ${typeof(arr)}`);
console.log(`Type of ${arr1} is ${typeof(arr1)}`);
console.log(`Type of ${(patt)} is ${typeof(patt)}`); // regular expression also comes under object data type