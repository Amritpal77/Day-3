const ind=require("readline-sync")

var n 
n=ind.questionInt("Enter loop size: ")
while(n!=0)
{
    console.log("Value is " +n)
    // n-=1
    n=n-1
}