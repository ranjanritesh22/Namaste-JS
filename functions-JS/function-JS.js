var numberFuntionExample = 1
functionExampleOne();
functionExampleTwo();
console.log(numberFuntionExample);

function functionExampleOne() { // Different Execution Context will be created for this method and will push inside the call stack
    var numberFuntionExample = 5;
    console.log(numberFuntionExample);
}

function functionExampleTwo() {
    var numberFuntionExample = 10;
    console.log(numberFuntionExample);
}
// Execution Context Play Imp Role In this.

/* ***************************************** First Class Function ft Anonymous Functions ***********************/

//Function Statement aka Function Declaration:
function functionalStatement() {
    console.log("this is what functional statement or function declaration is")
}
functionalStatement();

//function Expression:
var functionExpresion = function () {
    console.log("this is what function expression without name that is anonymous function attached to it as value") // Anonmyous function can be store as variable or function as value.
}
functionExpresion();

//Anonymous Function:
/*
function () {
}
*/

//Named Function Expression:
var namedfunctionExpresion = function namedfunction() {
    console.log("this is what function expression with name is") // Anonmyous function can be store as variable or function as value.
}
namedfunctionExpresion();
// namedfunction() -> it will throw reference error as it decalred as variable or function with value it is not in the global scope

//Parameters and arguments:
function takingInputFunction(param1,param2) { // accepting these parameters 
    return param1 * param2;
}
console.log(takingInputFunction(3,3)) // giving argument

//First class function:
let firstClassFunctionExp = function outer(param) {
                                return function inner() { }
                            }
console.log(firstClassFunctionExp());
//functions are First Class Citizens

//Arrow functions:

/* ***************************************** Callback Functions in js ft. EventListeners ***********************/

// callback function in js
function functionOne(functionTwo) {
    console.log("functionOne Here Decalred or statement");
    functionTwo();
}
functionOne(function functionTwo() {
    console.log("called function1 passing function2 as a argument in it");
})

setTimeout(function(){
 console.log('timer')
}, 5000)

//Javascript is synchronous and single threaded language.
//Blocking the main thread or never block the callstack.
//power of callbacks

//Event Listeners and closures plays a role here
function attachEventListeners() {
  let count = 0;
  const clickCheckCount = document.getElementById("clickCountCheck");

  function clickMeAndCheckCount() {
    console.log(`click Check ${++count}`);
  }

  //now it helps in data encapsulation with making closure => clickMeAndCheckCount forms a closure with attachEventListeners.
  clickCheckCount.addEventListener("click", clickMeAndCheckCount);
}
attachEventListeners();
//Garbage collection and Remove Event listeners:

/* ***************************************** High Order Functions ft. Functional Programming  ***********************/
