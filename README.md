# JavaScript

JavaScript concepts revised 

#### 1. Variables -

Variables can be declared in 3 ways. They are - 

* var
* let    
* const

Difference between var,let and const -

  * var variables can be updated and re-declared within its scope

  * let variables can be updated but not re-declared

  * const variables can neither be updated nor re-declared


#### 2. Operators 

* Arithematic Operators 

    * Addition (+)
    * Subtraction (-)
    * Multiplication (*)
    * Division (/)
    * Modulus (%)


* Bitwise Operators       

    * AND (&)
    * OR (|)
    * NOT (~)
    * left shift (<<)
    * right shift (>>)


* Comparision Operators   

    * equal (==)
    * not equal (!=)
    * greater than (>)
    * less than (<)
    * greater than or equal to (>=)
    * less than or equal to (<=)
    * strictly equal (same value and same type) (===)


* Logical Operators    

    * logical and (&&)
    * logical or (||)
    * logical not (!)


* Miscellaneous Operators

    * conditional (?:)
    * typeof 
    
    

#### 3. Data Types -

Data can be represented in many ways using data types.

* JavaScript has Primitive Data Types - 

    * Undefined

    * Boolean

    * Number

    * String

    * Null
    

* JavsScript has Non-Primitive Data Types - 

    All non primitive data types are objects.

    * Objects

    * Array

    * RegExp    

#### 4. Functions

Functions are used to decrease repetition of code and are to perform a task.

**Syntax**


```javascript
function functionname(parameters)
{
    // code block
}
```

#### 5. Objects Class and Inheritance

***Classes*** : Class is a user defined data type it contains data and memeber functions. 


```javascript
class Classname {
    constructor(parameters){
    // code-block
    }
    method1(parameters){
    // code-block    
    }
    method2(parameters){
    // code-block
    }
}
```

***Objects*** : These are used to represent real time entities. It is an instance of a class.


```javascript
var obj = {
    key1:value1,
    key2:value2,
    key3:value3,
    
    functionName: function(){
        // code
    }
}
```

#### 6. Events

An event is used to do some work in javascript when you do changes in HTML.


#### 7. Date

It is a JavaScript object which works on various date properties and features.

**Syntax**

var date = new Date(year, month, day, hours, minutes, seconds) 

#### 8. Math

Math is a JavaScript object which is used to do mathematical operations.

#### 9. JavaScript Statements

JavaScript Statements contain some basic syntax for conditioning, looping and type conversions.

#### 10. RegExp

RegExp are regular expression which are used to find or show a pattern in text.

#### 11. Error Handling

Error Handling is used to handle with javascript errors such as - EvalError,RangeError,SyntaxError,etc.

It is used to maintain flow of the application.

