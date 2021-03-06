var mat = Math;
console.log(mat); // output Object [Math] {}

// it is an object for mathematical operations
console.log(mat.PI); // output : 3.141592653589793
console.log(mat.E); // output : 2.718281828459045

// Round Ceil Floor abs sqrt pow min maxoperation

console.log(mat.round(5.25)); // output : 5
console.log(mat.round(5.75)); // output : 6
console.log(mat.ceil(9.3)); // output : 10
console.log(mat.floor(9.999)); // output : 9
console.log(mat.abs(123 - 1234)); // output : 1111
console.log(mat.sqrt(16)); // output : 4
console.log(mat.pow(25, 2)); // output : 625
console.log(mat.pow(2, 10)); // output : 1024
console.log(mat.min(1, 2, 3, 4, 5)); // output : 1
console.log(mat.max(1, 2, 3, 4, 5)); // output : 5


// Random number generation
console.log(mat.random()); // output : random value is displayed on console

// in range of 0 - 50
console.log(mat.random() * 50);

// in range of 25-50
bet_25_100 = 25 + (50 - 25) * mat.random();
console.log(bet_25_100);

// need integer values
console.log(mat.ceil(bet_25_100));

// Trignometric Operations sin, cos, tan
console.log(mat.sin(mat.PI / 6)); // output : 0.49999999999999994
console.log(mat.sin(mat.PI / 2)); // output : 1

console.log(mat.cos(mat.PI / 3)); // output : 0.5000000000000001
console.log(mat.cos(mat.PI / 2)); // output : 0

console.log(mat.tan(mat.PI / 4)); // output : 0.9999999999999999 (nearly 1)