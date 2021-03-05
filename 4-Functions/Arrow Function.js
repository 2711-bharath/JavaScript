// Square of numbers using Arrow function 

const square = (num1) => {
    return num1 * num1;
}

let num1 = 9;
console.log(`Square of ${num1} is ${square(num1)}`);

// Genrator Function

function* indexGenerator() {
    var index = 0;
    while (true) {
        yield index++;
    }
}

const indx = indexGenerator();
console.log(indx.next().value);
console.log(indx.next().value);
console.log(indx.next().value);