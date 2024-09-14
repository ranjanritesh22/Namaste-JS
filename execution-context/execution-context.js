let num = 3;

function squareOfNum(num) {
    let result = num * num
    return result;
}

let squareOfThree = squareOfNum(num);
let squareOfFour = squareOfNum(num + 1);
let squareOfTwo = squareOfNum(num - 1);

console.log("*******************Execution Context******************")
console.log(squareOfFour,squareOfTwo,squareOfThree);

/* 
Global Execution Context Is Created ,
call stack which manage the push and pop for the execution context when created and deleted from the global execution context ,
and when the js code run end calltsack get empty at the end ,
*/