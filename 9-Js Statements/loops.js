/*
Loops are used to excute a block of code many times.

There are different kinds of loops :
1. for
    for (Initialisation;break-condition;Stepping (or) Iteration) {
        code
    }
2. forin
    for(value in object){
        code
    }
3. foreach
    array.foreach(functionName)
    function functionName(index,value,array){
        code
    }
    index - represents index of element in array
    value - represents value of element in array
    array - represents whole array

4. forof
    for (variable of iterable) {
        code
    }

5. while
    while(condition){
        code
    }

6. do while
*/

// for
var obj = {}

for (let i = 1; i < 6; i++) {
    console.log(i);
    obj[i] = i;
}

// forin
var s = 0
for (i in obj) {
    console.log(`Key : ${i} Value : ${obj[i]}`);
    s += obj[i]
}

console.log(`Sum of values in object is ${s}`);


// foreach
arr = ["C", "C++", "Python", "Java", "JavaScript"];
let line = "";
arr.forEach(element => {
    line += element + " @ ";
});
console.log(line)

// forof
for (let iterator of arr) {
    console.log(iterator);
}

// while
var cnt = 5;
while (cnt > 0) {
    console.log(cnt);
    cnt--;
}

// do while

var cnt = 4;
do {
    console.log(arr[cnt]);
    cnt--;
} while (cnt >= 0);

// nested for loops

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        // code
    }
}