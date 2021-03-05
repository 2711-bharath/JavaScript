var string = "MynameisBharath."

// Length of string
console.log(`Length of ${string} : ${string.length}`);

// finding index string in string
console.log(`Index of "name" in string : ${string.indexOf("name")}`);

// finding index of repeating string from last
console.log(`Index of "a" from start in string : ${string.indexOf("a")}`);
console.log(`Index of "a" from last in string : ${string.lastIndexOf("a")}`);

// searching string in string
console.log(`Search "name" in string : ${string.search("name")}`);

// Note : Search and indexOf are not same

// Extracting string parts - 

// slice(start_pos,end_pos)
string = "Banana,Mango,Watermelon ";
console.log(`String is ${string}`);
console.log(`string.slice(5,12) is ${string.slice(5,12)}`);
console.log(`string.slice(-11,-1) is ${string.slice(-11,-1)}`);

// substring(start_pos,end_pos) it cannot accept negative indices
console.log(`string.substring(0,13) is ${string.substring(0,13)}`);

// substr(start_pos,length)
console.log(`string.substr(7,5) is ${string.substr(7,5)}`);

// replace(str_present,str_replace) in string (Case sensitive,replaces first match)
var x = string.replace("Mango", "Apple");
console.log(`string.replace("Mango","Apple") : ${x}`);

string = "Demon!-Angel-Demon!"
var n = string.replace(/Angel/g, "Demonx");
console.log(n)
var n = string.replace(/Demon/g, "Angelx");
console.log(n)

// Converting to upperCase and LowerCase
console.log(`(bharath).toUpperCase() : ${("bharath").toUpperCase()}`);
console.log(`(Bharath).toLowerCase() : ${("Bharath").toLowerCase()}`);

// concating strings
console.log(`"Bharath"+" Reddy" : ${"Bharath"+" Reddy"}`);
console.log(`"Bharath".concat(" Reddy") : ${"Bharath".concat(" Reddy")}`);

// trim - used to remove white spaces 
console.log(`("        Bharath        ") : ${("        Bharath        ").trim()}`);


// String Padding
console.log(`("X").padStart(4,0) : ${("X").padStart(4,0)}`);
console.log(`("X").padEnd(4,0) : ${("X").padEnd(4,0)}`);

// converting string to Array
string = "Banana,Mango,Watermelon ";
let arr = string.split(",")
console.log(`string.split(",")[1] : ${arr[1]}`); // spliting by ,
for (i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}