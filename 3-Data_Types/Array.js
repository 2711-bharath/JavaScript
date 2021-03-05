// array declaration
var arr = ["JavaScript", "Python", "C++", "C"];

// converting arrays to string
console.log(`arr.toString() : ${arr.toString()}`);

// joinging array elements
console.log(`arr.join(" @ ") : ${arr.join(" @ ")}`);

// stack operations
console.log(`Array before pop ${arr}`)
console.log(`arr.pop() : ${arr.pop()}`);
console.log(`Array after pop ${arr}`)

arr.push("Dart");
console.log(`Array after arr.push("Dart") : ${arr}`);

// shift - removes element from array
console.log(`Array before shift ${arr}`);
console.log(`arr.shift() : ${arr.shift()}`);
console.log(`Array after shift ${arr}`);

// unshift - add element to array at start
console.log(`Array before unshift ${arr}`);
console.log(`arr.unshift("Java") : ${arr.unshift("Java")}`);
console.log(`Array after unshift ${arr}`);

// length of array
console.log(`Length of array : ${arr.length}`);

// splice is used to add elements to array
// splice(position,remove_cnt,element_values)
console.log(`Array before splice ${arr}`);
arr.splice(3, 0, "designing", "coding");
console.log(`Array after splice ${arr}`);

console.log(`Array before splice ${arr}`);
arr.splice(3, 2); // removing two elements from 3rd position
console.log(`Array after splice ${arr}`);

// merging arrays
var arr1 = ['a', 'e', 'i', 'o', 'u'];
var arr2 = [1, 2, 3, 4, 5, 6];
console.log(`arr1.concat(arr2) : ${arr1.concat(arr2)}`);

// sorting array for numeric values
arr = [23, 8, 10, 15, 5, 9];
arr.sort(function(a, b) { return a - b });
console.log(`Sorted array : ${arr}`);
console.log(`Maximum element : ${arr[arr.length-1]}`)
console.log(`Minimum element : ${arr[0]}`)

arr.sort(function(a, b) { return b - a });
console.log(`Sorted array : ${arr}`);

arr = ['d', 'a', 'z', 'k', 'g', 'p', 'j', 'b', 'x'];
arr.sort();
console.log(`Sorted array : ${arr}`);
console.log(`Maximum element : ${arr[arr.length-1]}`)
console.log(`Minimum element : ${arr[0]}`)
arr.reverse()
console.log(`Reverse Sorted array : ${arr}`);


// Array Iterations

// 1. array.forEach(Function(value,index,array));
arr = ['Python', 'Java', 'JavaScript', 'C++', 'C'];
arr.forEach((value, index, array) => { console.log(index, value) });

str = ""
arr = ['d', 'a', 'z', 'k', 'g', 'p', 'j', 'b', 'x'];
arr.forEach(value => { str += value });
console.log(`Array concatination : ${str}`);

// 2. array.map(Function(value,index,array))
arr = ['Python', 'Java', 'JavaScript', 'C++', 'C'];
arr.map((value, index, array) => { console.log(index, value) });

// 3. array.filter(Function(value,index,array))
console.log("Filtering")
arr = ['Python', 'Java', 'JavaScript', 'C++', 'C'];
arr.filter((value, index, array) => {
    if (index > 2) {
        console.log(index, value);
    }
});

var arr = [15, 32, 8, 20, 72];
var sum = arr.reduce((total, value, index, array) => {
    return total + value;
});
console.log(`Sum of array ${arr} elements : ${sum}`);

// index of element
var arr = ['a', 'b', 'c', 'd', 'e', 'a', 'f', 'g'];
console.log(`Index of b from start : ${arr.indexOf('b')}`);
console.log(`Index of a from end : ${arr.lastIndexOf('a')}`);