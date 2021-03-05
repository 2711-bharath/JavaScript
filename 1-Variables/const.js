// const can be only available inside the scope it's declared

const pi = 3.141592653589793238;
if (pi > 3.14) {
    const pi = 3.14;
    console.log(pi)
}

console.log(pi)

// returns an error as const can't be reassigned.
pi = 3.14