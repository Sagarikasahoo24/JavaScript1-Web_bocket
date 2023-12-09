//Loop:= repeatedly execute the statement .
/*
IN JS THERE ARE 5 TYPES OF LOOPS.
1.for loop
    for(initialization,condition,incr/decre){
        statement
    }
2.while loop
 while(condition){
    statement;
    incr/decrem;
 }  
 
 3. do-while loop:=
    do(condition){
    statement;
    incr/decrem;
    while(condition)
 } 

var a = 12;
while(a<20)
{
    console.log(a);
    a++;
}
var a = 12;
while(a<20)
{
    console.log("hey");
    a++;
}
while(a< 15)
4. for-in loop
 * for in loop was only works on object.
 * they iterate the key value pair in object.

5. for-in loop
 var obj = {
    name : "Sagarika",
    age : 24,
    place : "Universe"
 }
 for(var key in obj){
    console.log(key);
    console.log(obj[key]);
    console.log(key,obj[key]);
 }
 5. for-each loop
  -for each loop will only execute with an array.
  - Its main motive is traverse/iterate the array element one by one.
  */
 
  var a=[1,2,3,4,5,6,7,8,9]
  a.forEach(function(val){
    console.log(val);
  })