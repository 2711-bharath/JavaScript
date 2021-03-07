/*

if :used to execute block of code when condition is true
else :used to execute block of code when same condition is false
else if :used to execute block of code when new condition is true if above condition is false

switch : used to select one of many blocks of code to be executed

*/

// if-else 
var num = 2;
if (num % 2 == 0) {
    console.log("Number is Even");
} else {
    console.log("Number is Odd");
}

// if-else if-else 
num = -1
if (num > 0) {
    console.log("Number is Positive");
} else if (num < 0) {
    console.log("Number is Negative");
} else {
    console.log("Number is nether Positive nor Negative");
}

// switch 
num = 3;
switch (num) {
    case 1:
        console.log("Value of num is 1");
        break;

    case 2:
        console.log("Value of num is 2");
        break;

    case 3:
        console.log("Value of num is 3");
        break;

    case 4:
        console.log("Value of num is 4");
        break;

    case 5:
        console.log("Value of num is 5");
        break;

    default:
        console.log("Value of num is not present in between 1 and 5");
}