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


6) For Revision of Block Scope and Shadowing:
      Q) What is block in JavaScript?
      > multiple js statements formed in a group enclosed in brackets and it forms a block

      Q) What is need of a block/Grouping?
      > JavaScript sometimes expect to run a single statement to run, but we need to run commands with multiple statements which is only possible by block

      eg. on 4:14

      write a simple function:
      // even empty script is perfectly valid js script, what about empty brackets!!
      {
      var a = 10;
      let b = 20;
      const c =30; 
      }

      When a js script get hoisted (a Global Execution Context) gets created 'var' listed towards 'Global environment' and other variables 'let' and 'const' declarations go to the 'Block environment' 
      This become especially important when deciding the scope of a particular variable, since b and c are located in 'Block environment' and for a as we know exists in 'Global environment' any statement out of the "Block" can access 'a' ie.  ' Variable in Global environment' and other are not!
      so when we understand the extent of Global and local environment variables and their 'Scopes' == Environment that forms the lexical hierarchy of 'Scopes' and 'Scopes' have Levels like 'Scope inside scope'

      see script in 7:03

      var a = 100;
      {
      var a = 10;
      let b = 20;
      const c =30; 
      console.log(a);
      console.log(b);
      console.log(c);
      }
      console.log(a);
      console.log(b);
      console.log(c);

      So in block " var a = 10;" influences the value within the block hence  console.log(a); >> 10 and outside of the block 'Variable in Global environment' influences value of a hence console.log(a); >> 100

      Illegal shadowing:

      let a = 200;
      {
      var a =20;
      }

      as 'var' declaration goes to 'Global environment' and sets in Memory context, it cannot be set using 'Block environment' value Hence:    Uncaught SyntaxError: Identifier 'a' has already been declared