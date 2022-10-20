/*Function:-----
Set of block of statement is called function. Function have various name which are as follow:-
1. Module 2.Subprogram 3. Method 4.Subroutine
Benefits of function:-
1. Reusbility
2. Easy to manipulate
3. Independent
4. Easy to understand
Function is divided into two category
1. Pre-defined__log(), questionInt, create server()
2. user defined___Defult, parameter, return
*/

// Default function()
/*
1. default---A function which have no arguments or parameters is called default function.
2. Parameter----A function which have an argument(Parameter) is called parameter function.
3. return:----A function return a value is called return function.
*/
// If we call a function in that same function it will be an infinite loop
// program of default function:--

function hello()  //default function
{
    amr()
    console.log("I am in deafult function")
}
function amr(){
    console.log("I am in Amrit function")
}
hello()
amr()