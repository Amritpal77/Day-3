// break in for loop
const ind=require("readline-sync")
var i,n 
n=ind.questionInt("Enter loop size")
console.log("Value are-----")
for(i=0; i<=n; ++i)
{
    if(i==10){
        break
    }
    console.log(i)
}