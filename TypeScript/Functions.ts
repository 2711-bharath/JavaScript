/*
    Syntax:
    function function_name(para1:data type,para2:data type,...):return data_type{
        // some code
    }
*/

// taking string as argument and printing it and and not returning anything 
function greet(username:string):void{
    console.log("Hello "+username);
}

greet("Bharath")

// taking an array as argument and returning it's sum 
function addMarks(marks:number[]):number{
    let sum:number=0;
    marks.forEach((value)=>(sum+=value));
    return sum;
}

console.log("Marks : "+addMarks([90,88,92,79,82])+"/500")

