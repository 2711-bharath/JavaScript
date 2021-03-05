// output : undefined
// Note : variable declared by var keyword can be accessed before initialization
console.log(userName);
var userName = 'Bharath';

var rollNo = 590;
// output : 590
console.log(rollNo);

// declaring two variables at a time
var x = 1,
    y = 2;
console.log(x, y);

/*
Difference between var,let and const -

var variables can be updated and re-declared within its scope

let variables can be updated but not re-declared

const variables can neither be updated nor re-declared
*/