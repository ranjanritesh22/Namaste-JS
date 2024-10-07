"use strict"

//this in global scope 
console.log(this) // global object- window , global

//this inside a function
function thisExample() {
    // this value depends on strict/non-strict mode
    console.log(this)
}

//this substitution (this inside non-strict mode) -> 
/* in non strict mode if this keyword value is defined or undefined than the value is replaced by global object due to this
substitution -> ** in non - strict mode always original value is (undefined) it is changed due to this substitution */

//this keyword depends on how the function is called
thisExample(); // without any refernce it will give ->  undefined
window.thisExample(); // with reference it will give the calling object here it is -> window object

//this inside a object's method 
const obj = {
    exampleNumber: 20,
    exampleFunction: function functionInsideObject() {
        console.log(this)
    }
}
obj.exampleFunction(); // it will give the obj as the value; as we have seen as Global Object example

// call, apply, bind method sharing method in js Very Important methods 
// Sharing Methods orriding value
const student1 = {
    name: 'akshay',
    printName: function (){
        console.log(this.name)
    }
}
student1.printName();

const student2 = {
    name: 'deepika',
}
student1.printName.call(student2);

//this inside arrow function (Very Important)
let objectA = {
    c: 20,
    objectB: {
        a: 10,
        b: () => {
            console.log(this) // gives window object
        }
    }
}
objectA.objectB.b();

let thisObjectExample = {
    a: 10,
    b: function thisSomething() {
        // console.log(this) // think like this in  arrow function how it inherits in this keyword enclosing lexical context or scope
        let a = 2;
        const exampleForArrow = () =>  {
            console.log(this); // value will be (thisObjectExample) as this doesnot have this it will take enclosing its lexical scope
        }
        exampleForArrow()
    }
}
thisObjectExample.b();

// this inside DOM  => reference to the HTML element onclick="alert(this)"