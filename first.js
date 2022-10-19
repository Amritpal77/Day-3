/*
loop order
1. Increasing=Post-increment, pre-increment
2. Decreasing=post-decrement, pre-decrement
Post-increment, pre-increment
      |              |
      a++            ++a
      | |            |   \
operand  operator operand  operator 
post-decrement, pre-decrement
       |              |
      a--             --a
      | |             |   \
operand  operator operand  operator

Types of LOOPS
1. for
2. nested for loop
3. while loop
4. do while loop
5. for each loop
6. for in loop
7. for of loop
8. recursion loop
9. iteration loop

syntax of for loop
for(intilization; condition; inc/dec)
      |               |         |
     start point     End       order
*/

// for loop
const ind=require("readline-sync")
var i,n 
n=ind.questionInt("Enter loop size")
console.log("Value are-----")
for(i=0; i<=n; ++i)
{
    console.log(i)
}