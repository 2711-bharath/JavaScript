// function for checking even or odd
function isEven(num) {
    return num % 2 == 0;
}

let num1 = 20;
console.log(`${num1} is even statement is ${isEven(num1)}`);
num1 = 35;
console.log(`${num1} is even statement is ${isEven(num1)}`);

//Recursive function
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

num1 = 6;
console.log(`Factorial of ${num1} is ${factorial(num1)}`);

// function expression
const count = function(arr) {
    return arr.length;
}

let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(`Count of values array ${arr} is ${count(arr)}`);



const methods = {
    numbers: [1, 2, 3, 4, 5],
    sum: function() { // function expression
        return this.numbers.reduce(function(acc, num) {
            return acc + num;
        })
    }
}

console.log(methods.sum())


// taking multiple values as parameters
const object1 = {
    stack: [],
    add(...items) {
        this.stack.push(...items);
    },
    get(index) {
        return this.stack[index];
    },
    show() {
        for (i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i])
        }
    }
}

object1.add("Bharath", "19071A05XX", "CSE-B", "VNR VJIET");
console.log("Displaying Data inside the object")
object1.show();
console.log(`Element at position 3 ${object1.get(3)}`);