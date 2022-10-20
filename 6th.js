/*
Return function:---
return  a,b :----- b will override  a value means it will return value of b 
*/


function hello()
{
    var a=12, b=3
    var c=a+b 
    return c
}
function by(x)
{
    var s=hello()
    var final=s-x
    return final
}
 var z=by(6)
 console.log("Ans is "+z)