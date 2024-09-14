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