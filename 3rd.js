// do while loop
/*
Suntax:-
intilization;
do
{
    statement;
    inc/dec;
}
while(condition);
*/
const ind=require("readline-sync")

var i=0,n 
n=ind.questionInt("Enter loop size: ")
do
{
    console.log("Your I value is " +i)
    i++
}
while(i<n)