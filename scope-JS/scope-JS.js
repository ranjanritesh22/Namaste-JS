// 1) undefined explain 
console.log(valueOfa);
var valueOfa = 10
console.log(valueOfa);
valueOfa = 'lossely typed language' // js is loossely typed language
console.log(valueOfa);

// 2) The Scope Chain and lexical environment:
function scope1() {
    let scopeVariable = 2;
    scope2();
    function scope2() {// scope2 is lexically inside scope1 and scope1 is lexically inside global scope (lexical basic is ) => a sequence or hierically
      console.log(scopeVariable); // scope2 will be accesible to memory of the scope1 and its lexical env same scope1 will go for global scope
    }
}
scope1();
//console.log(scopeVariable); // here it will be throw not defined // chain of all the lexical env and the parent refernce is (scope chain)

 /* 
    whole summary scope2 (lexically inside) -> scope1 (lexically inside) -> Global Scope (scope chain) and it will refer to its memory allocation.
    **imp -> (scope2) will have always local memory of (scope2) and lexical env of basically its parent (scope 1) and global
 */

// 3) Let and Const in Js (Temporal Dead Zone)
// let -> 
let variableExampleLet ; // initilize
variableExampleLet= 10; // declare or assigning value
console.log(variableExampleLet);

//const
const variableExampleForConst = 20 ;
// variableExampleForConst = 30  //will throw type error
console.log(variableExampleForConst)

//3) Block Scope and Shadowing In js :