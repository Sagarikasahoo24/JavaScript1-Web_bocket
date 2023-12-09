//control statement

/*
    control statement are those who create condition on wheather you goes this side you goes another side like that
    1. if -if condition is true then stetement is otherwise it will false.
       
    if(condition)
    {
        statement
    }

    2.if-else := if condition is satisfied then if block is executed othrwise else block will executed

     if(condition)
    {
        statement
    }
    else{
        statement
    }
    
*/
// var a = 20;
// if(a<18)
// {
//     console.log("they did not give vote");
// }
// var a = 219;
// if(a%2==0)
// {
//     console.log("even");
// }
//     else{
//         console.log("odd");
    // }
    // 3. if else-if else-if else:=in that we can add multiple case simultaneously  to check the condition  where we get executed.
    
    //  if(condition)
    //  {
    //      statement
    //  }
    //  else if{
    //      statement
    //  }
    //  else {
    //      statement
    //  }

        // const balance = 1000;
        // if(balance<5000){
        //     console.log("less than 500");
        // }
        // else if(balance<700){
        //     console.log("less than 700");
        // }
        // else{
        //     console.log("less than 1200");
        // }
     /*4. switch:=a part of js conditional statement where we execute different statement depends on the condition that they check.
     switch(condition){
     case : value
     break; 
      case : value
     break; 
      case : default
     break; 
        }
        */
       const month = "april";
       switch(month){
        case 1:
            console.log("January");
            break;
        case 2:
                console.log("February");
                break; 
        case 3:
            console.log("march");
            break;
        case 4:
                console.log("April");
                break;
        case 5:
                    console.log("May");
                    break; 
        case 6:
                console.log("June");
                break;   
        case 7:
            console.log("July");
            break;
        case 8:
                console.log("August");
                break; 
        case 9:
            console.log("September");
            break;
        case 10:
                console.log("October");
                break;
        case 11:
                    console.log("November");
                    break; 
        case 12:
                console.log("December");
                break;   
        default:
                    console.log("Default Case");
                    
       }