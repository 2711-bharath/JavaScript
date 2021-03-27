# JavaScript 

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

* DOM is a programming interface for HTML and XML documents. 
* It represents HTML document in a tree representation. 
* It is used to dynamically change the document structure,style and content in it. 

## Methods

We can access and change the contents of document using following methods

* **write(string)** : It is used to write the given string on the document
* **getElementById()** : It is used to return the element in the document having same id as given id
* **getElementByName()** : It is used to return all elements having given name  
* **getElementByClassName()** : It is used to return all elements having given class name
* **getElementByTagName()** :  It is used to return all elements having the given tag name

## CSS

We can access and change style properties of an element using method.style.property

**Example Syntax** -

```javascript
document.getElementById("heading").style.color = "white"; // changing color of element with id=heading
document.getElementById("heading").style.backgroundColor = "black"; // changing background color of element with id=heading
document.getElementById("p1").style.border = "2px solid black"; // adding border to element whose id=p1
```

## Animations

We can animate using dom CSS and methods 

**Example Syntax** -

Function making the div element whose id=div1 in diagnol way

```javascript
function moveDiagnol() {
    var elem = document.getElementById("div1");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos == 320) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
            elem.style.top = pos + "px"
        }
    }
}
```

## Events

DOM Events allow javascript to add different events on elements in HTML document.

**Syntax** -
document.getElementById(id).event = function;

Some of the example events are - 
* onclick
* onmouseenter
* onmouseleave
* onload

## Event Listener
We can add events to HTML elements in a document from JavaScript using event listener.
**Syntax**
To add an event 

document.getElementById(id).addEventListener(eventType, function)

To remove an event 

document.getElementById(id).removeEventListener(eventType, function)

```javascript
 document.getElementById("btn2").addEventListener("click", function() {
    var text = prompt("Enter any text : ");
    document.getElementById("p2").innerHTML += "<br>" + text;
})

function removeEvent() {
    document.getElementById("btn3").removeEventListener("click", myfunc);
}
```
## Nodes

The DOM is a tree structure that represents the HTML website, and every element in HTML document is a **node**.

We have different types of nodes.
These are some nodes that are oftenly used - 

* ELEMENT_NODE  
    * Ex : h1, p, span, etc..
* ATTRIBUTE_NODE E
    * Ex: class, id, src, etc..
* TEXT_NODE 
    * Ex: every html element having text inside it contains text node

## Collections

An HTMLCollection object is an array-like list or collection of HTML elements.

**Example** - 

In the below code it collects all the p tag elements in document.

These elements can be accessed using index.

Here all p elements color is changed to red and font size is changed to 20px.

```javascript
var myCollection = document.getElementsByTagName("p");
var i;
for (i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "red";
    myCollection[i].style.fontSize = "20px";
}
```
