// Nested for loop :- One loop inside another loop is called nested for loop
/*
Syntax:-
for(intilization; condition; inc/dec){                           \
    for(intilization; condition; inc/dec){                        \
        statement                          \_________ Innerloop    \_______outer loopp
    }                                      /                       /
    statement                                                     / 
}                                                                /
*/

const ind=require("readline-sync")
var i,j,n 
n=ind.questionInt("Enter pattern size")
for(i=0; i<n; i++){
    for(j=0; j<=i; j++){
        process.stdout.write("*")
    }
    console.log()
}

/*
1. factorial find 
2. table print
3. prime no. check yes or no
4. prime no. print[20] first
5.***
  **
  *
6.
1
12
123

7.
1
22
333
4444

8. 
54321
4321
321
21
1

9.
  *
 **
***

10.
*****
****
***
**
*

11.
  *
 ***
*****

12. 
*****
 ***
  *

13. 
  *
 ***
*****
 ***
  *

14. 
*
 *
  * 

15.
  *
 *
*

16.
 *   *
*** ***
*******
 *****
  ***
   *

17. 
 *
**
*******
**
 *

18. hut

19. chair
*/