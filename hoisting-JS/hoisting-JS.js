// Hoisitng In js 

console.log(hoistingExampleNum);// Accessing the variable before initilizing the variable
getHoistingExampleMethod(); // Accessing the method before initilizing the method

/* 
    The code will be running fine without error because  before code runs  its execution context is created ,
    and in phase 1 memory allocation happens allocating memory to hoistingExampleNum and  getHoistingExampleMethod
    hoistingExampleNum: undefined (reserved keyword )
    getHoistingExampleMethod: function getHoistingExampleMethod() {
                                    console.log('Hoisting Explain Example');
                              } 
*/
var hoistingExampleNum = 12;
function getHoistingExampleMethod() {
    console.log('Hoisting Explain Example');
}

// making functions as variable (function Expression)
var variableFunctionExample1 = function () {
    console.log('creating method as a variable')
}

var variableFunctionExample2 = () => {
    console.log('arrow function example')
}