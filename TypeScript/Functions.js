/*
    Syntax:
    function function_name(para1:data type,para2:data type,...):return data_type{
        // some code
    }
*/
// taking string as argument and printing it and and not returning anything 
function greet(username) {
    console.log("Hello " + username);
}
greet("Bharath");
// taking an array as argument and returning it's sum 
function addMarks(marks) {
    var sum = 0;
    marks.forEach(function (value) { return (sum += value); });
    return sum;
}
console.log("Marks : " + addMarks([90, 88, 92, 79, 82]) + "/500");
