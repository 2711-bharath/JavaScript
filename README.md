# JavaScript and TypeScript

JavaScript concepts revised 

## Variables -

Variables can be declared in 3 ways. They are - 

* var
* let    
* const

Difference between var,let and const -

  * var variables can be updated and re-declared within its scope

  * let variables can be updated but not re-declared

  * const variables can neither be updated nor re-declared


## Operators 

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
    
    

## Data Types -

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

## JavaScript Statements

JavaScript Statements contain some basic syntax for conditioning, looping and type conversions.

## Functions

Functions are used to decrease repetition of code and are to perform a task.

**Syntax**


```javascript
function functionname(parameters)
{
    // code block
}
```

## Objects Class and Inheritance

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

## Events

An event is used to do some work in javascript when you do changes in HTML.


## Date

It is a JavaScript object which works on various date properties and features.

**Syntax**

var date = new Date(year, month, day, hours, minutes, seconds) 

## Math

Math is a JavaScript object which is used to do mathematical operations.

## RegExp

RegExp are regular expression which are used to find or show a pattern in text.

**Syntax** -

var pattern = new RegExp(pattern,attributes);

var pattern = /pattern/attributes

pattern is string that specifies pattern of regular expression

* **Modifiers** -

    We have 3 types of modifiers -
    * g : it performs a global match
    * i : it performs case-insensitive matching
    * m : It performs multiline matching


* **Brackets** - 

    * [abc] : Finds any character between the brackets.
    * [^abc] : Finds any character NOT between the brackets.
    * [0-9] : Finds any digits between the brackets.
    * [^0-9] : Finds any non-digit NOT between the brackets.


* **METACHARACTERs** - 
    
    * w - It looks for a word character
    * W - It finds a non-word character
    * d - It finds a digit
    * D - It finds a non digit character
    * s - It finds a whitespace character
    * S - It finds a non-whitespace character
    * b - It finds a match at the beginning/end of a word
    * B - It looks for a match, but not a the beggining/end of a word
    * f - It finds a form feed character
    * r - It finds a carriage return character
    * v - It finds a vertical tab character
    * t - It finds a tab character


* **Quantifiers** - 
    
    here below it can be any character in place of a

    * a+ : it matches any string that contain atleast one a
    * a* : it matches any string that contains zero or more occurrence of a
    * a? : it matches any string that contains zero or one occurrence of a
    * a{N} : it matches any string that contains a sequence of N a's
    * a{N,M} : it matches any string that contains a sequence of  N to M a's
    * a{N,} : it matches any string that contains a sequence of atleast N a's
    * a$ : it matches any string a at the end of it

* **Object Properties** - 

    * constructor : Returns the function that creates the RegExp object's prototype
    * global : Checks whether the "g" modifier is set
    * ignoreCase : Checks whether the "i" modifier is set
    * lastIndex : Specifies the index at which to start the next match
    * multiline : Checks whether the "m" modifier is set

* **Object Methods** - 

    * Complie() : It compiles a regular expression
    * exec() : It tests for a match in a string and returns the first match
    * test() : It tests for a match in a string and return true or false
    * toString() : it returns the string value of the regular expression


## Error Handling

Error Handling is used to handle with javascript errors such as - EvalError,RangeError,SyntaxError,etc.

It is used to maintain flow of the application.

# Document Object Model (DOM)



