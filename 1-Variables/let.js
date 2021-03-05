// let can be only available inside the scope it's declared

// returns an error cannot be accessed before initialization
console.log(userName);
let userName = 'Bharath';

let n = 100;

// inside this scope
{
    let n = 200;
    console.log("n value inside the scope", n);
}

// outside the scope
console.log("n value outside the scope", n);

{
    let n1 = 10;
}

// returns error as n1 is used outside the scope
console.log(n1);