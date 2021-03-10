# JavaScript

JavaScript concepts revised 

#### Variables -

Variables can be declared in 3 ways. They are - 

* var
* let    
* const

Difference between var,let and const -

  * var variables can be updated and re-declared within its scope

  * let variables can be updated but not re-declared

  * const variables can neither be updated nor re-declared


#### Operators 

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
    
    

#### Data Types -

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

#### JavaScript Statements

JavaScript Statements contain some basic syntax for conditioning, looping and type conversions.

#### Functions

Functions are used to decrease repetition of code and are to perform a task.

**Syntax**


```javascript
function functionname(parameters)
{
    // code block
}
```

#### Objects Class and Inheritance

***Classes*** : Class is a user defined data type it contains data and memeber functions. 

**Syntax**

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

**Syntax**

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

#### Events

An event is used to do some work in javascript when you do changes in HTML.


#### Date

It is a JavaScript object which works on various date properties and features.

**Syntax**

var date = new Date(year, month, day, hours, minutes, seconds) 

#### Math

Math is a JavaScript object which is used to do mathematical operations.

#### RegExp

RegExp are regular expression which are used to find or show a pattern in text.

#### Error Handling

Error Handling is used to handle with javascript errors such as - EvalError,RangeError,SyntaxError,etc.

It is used to maintain flow of the application.

