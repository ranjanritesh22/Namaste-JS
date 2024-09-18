1) Global execution context when created its has global object with lots of pre built methods and variables created by js engine 
   who run the js code in the browser that global object is (window) referred by this so (this === window ) -> gives true.
   The GLOBAL SPACE which we called or GlOBAL ENVIRONMENT.

2) undefined Vs Not Defined
   undefined is the special keyword which is placed for the variable until the value is assigned to it all game of execution context phase 1 memory allocation.

3) The Scope Chain and lexical env.

4) let and const in js (Temporal Dead Zone)

   -> let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".

   -> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"

   -> level of strictness ... var<<let<<const.

   -> var //no temporal dead zone, can redeclare and re-initialize, stored in GES(Global Execution Scope)
      let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
      const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory

   -> syntax error is similar to compile error. while type and reference error falls under run time error.
   -> syntax error ... violation of JS syntax
      type error ...  while trying to re-initialize const variable
      reference error ... while trying to access variable which is not there in global memory.

5) Block Scope and Shadowing In JS

   -> Code inside curly bracket is called block.
   -> Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else,
      loop, function etc. (Block values are stored inside separate memory than global). They are stored in block. 
      (the reason let and const are called block scope)
   -> Shadowing of variables using var, let and const.
   -> The shadow should not cross the scope of original otherwise it will give error.
   -> shadowing let with var is illegal shadowing and gives error.
   -> var value is stored in nearest outer function or global scope and hence can be accessed 
      outside block as well whereas same is not the case with let and const.