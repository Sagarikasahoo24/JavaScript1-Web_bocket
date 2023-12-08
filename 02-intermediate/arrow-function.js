/* 
    Arrow function:- 
    **In ES6 major update had done.It changes the old syntax of function declaration and tried to reduce the length of a code.
   
    **I n arrow function we need a variabkle to declaire it and majorly used => this operator to define arrow function.
    
*/  
//  Old syntax of a function

    // function addTwoNumbers(num1, num2){ 
    //     return num1+num2;
    // }
    // console.log(addTwoNumbers(6,7));


 //Arrow Function

    // const user={
    //     userName : "Sagarika",
    //     location : "BBSR",
    //     welcomeMessage : function(){
    //         console.log(`${this.userName},Good Morning`);
    //         console.log(this);
    //     }
    // }
// console.log(user);

// user.welcomeMessage();
// user.userName="saga";
// user.welcomeMessage();


// const person={
//     name : "Rally",
//     age : 20,
//     loginDay:["sunday","monday"],
//     username :{
//         userDetails :{
//             lname:"sahoo",
//             fname:"sagarika",
//         }
//     }
// }
// console.log(person.username.userDetails.fname);
// console.log(person);

const userDetails=() =>{
    let username="Web_Bocket"
    console.log(username);
}
userDetails(" ");

const addTwoNumbers= (num1, num2)=>{
    return num1+ num2;
}
const addNos=(num1,num2) => num1+ num2;
console.log(addTwoNumbers(9,8));
console.log(addNos(9,6));

//For Each Method

    const myArr = myArr.array.forEach(element => {
        
    });