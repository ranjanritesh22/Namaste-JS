// Good Example for closures in js 
function outerFunction() {
    let variableOne  = 10;

    return function innerFunction() {
        console.log(variableOne)
    }
}

let variableStoredFunction = outerFunction();
variableStoredFunction()

// corner case for closures
function one() {
    let variableOne = 20;

    function two() {
        let variableTwo = 30;

        function three() { // three will form closure with two and one function along with lexical scope bundled forms a closure
            console.log(variableOne,variableTwo)
        }
        three();
    }
    two();
}
one()

// example of closure event handling:
function createClickHandler(elementId) {
    let count = 0;
    return function ritesh() {
        count++;
        console.log(`Button ${elementId} clicked ${count} times`);
    };
}
const buttonHandler = createClickHandler('myButton');
document.getElementById('myButton').addEventListener('click', buttonHandler);

function outerSpace() {
    for(let i = 0; i<=5; i++) {
        setTimeout(function print(){
            console.log(i)
        },3000)
    }
}
outerSpace();

// interviews question ->

//use of double paranthesis ()();
//function paramter closed over?
//Relation of Scope chain and closures
//conflicting name global variable in js 
function outest() {
    let outestVariableExample = 10;
    function outer(paramter) {
        let variable = 2
        function inner() {
            console.log(variable,paramter,outestVariableExample)
        }
        return inner;
    }
    return outer;
}

let variable = 100;
outest()(3)(); // calling inner function in a single line no need to create variable exppession.

// Data Encapsulation using closures.
// Using in Js making constructor we will see in Oops in js 







