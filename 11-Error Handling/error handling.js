/* 
     
    key words -

    1. try
    2. catch
    3. throw
    4. finally

    syntax:

    try{
        Code to run
    }catch(err){
        error handling
    }finally{
        Code that is always executed regardless of an exception occuring
    }

    syntax for throw
    throw new Error(Message)

    Error Object :
        JavaScript has built in error object.
        It has two properties. They are name and message.


    There are 6 Error Names. They are -

        1. EvalError
        2. RangeError
        3. ReferenceError
        4. SyntaxError
        5. TypeError
        6. URIError
*/

// example code 

try {
    console.log('Begin try runs');
    // error here 
    console.log('End try runs');
} catch (err) {
    console.log('Error occured : ', err);
}


var str = "JavaScript";
try {
    if (typeof(str) != "Number") {
        throw new Error(`This is not number it is string`);
    } else {
        console.log('This is number');
    }
} catch (err) {
    console.log('Error occured!!!');
    console.log(err.name);
    console.log(err.message);
} finally {
    console.log('Finally this will run');
}

// RangeError example
var num = 1;
try {
    num.toPrecision(101);
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}

// ReferenceError example
var str = "Hello";
try {
    str = str + str1;
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}