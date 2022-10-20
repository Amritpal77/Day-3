// While loop and do while loop
/*
Syntax:- 
intilization; _______start point(optional)
while(condition)______________End point
{
    statement;
    inc/dec;___________order(optional)
}
*/
const ind=require("readline-sync")

var i=0,n 
n=ind.questionInt("Enter loop size: ")
while(i<n)
{
    console.log("Value is " +i)
    i++
}