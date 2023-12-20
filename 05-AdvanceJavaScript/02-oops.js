/*
    oops concept:-
        there are certain features or mechanism which make the language object oriented.

     1. object 
     2. class
     3. inheritance
     4. encapsulation
     5. polymorphism
     6. abstraction       

1.object:-
as object is a unique entity that contain properties and methods.
        
        the objects can be created in two ways in JS.
            1. object loteral
            2. object constructor

i. object loteral:-

let person={
    first_name: "sagarika",
    last_name: "sahoo",

    getFunction: function(){
        return(`the name of the person is ${person.first_name} ${person.last_name}`)
    },
phone_number:{
    mobile: '7735203687',
    lant_line:'163548846485'
}
    }
    console.log(person.getFunction());
    console.log(person.first_name);
    console.log(person.last_name);
    console.log(person.phone_number.mobile);

ii. object constructor:=

this is the constructor
function person(first_name,last_name){
    this.first_name=first_name;
    this.last_name=last_name;
}
    let person1=new person('sagarika','sahoo');
    let person2=new person('subash','rally');

    console.log(person1.first_name);
    console.log(`${person2.first_name} ${person2.last_name}`)

 2. class:-
    class is a blue print of Object. A class have many objects because the class is template 
    while objects are instance of the class or the concrete implementation.
 
    
        class vehicle {
            constructor(name,maker ,engine){
                this.name=name;
                this.maker=maker;
                this.engine=engine;
            }
            getDetails(){
                return(`the name of the bike is ${this.name}`)
            }
        }
        let bike1 = new vehicle('hayabhusa','suzuki','R125');
        let bike2 = new vehicle('5fdxr','glamer','pulser')

        console.log(bike1.engine);
        console.log(bike2.maker);
        console.log(bike1.getDetails());


3. inheritance->
        inheritance is a property in which it inherit the property of parent 
        class to child class through extend keyword.

 class person {
    constructor(name){
        this.name=name;
    }
    toString(){   //to return the string
            return(`Name of person: ${this.name}`)        
    }
 }
 class student extends person{
    constructor(name,id){
        super(name);
        this.id = id;
    }
    toString(){      //method to return the string
        return(`${super.toString()}, student ID : ${this.id}`);

    }
 }
 let student1= new student('sagarika',24);      //creating object and give value
 console.log(student1.toString());


4. encapsulation:=
    The process of wrapping properties function within a single unit is known as encapsulation.


class person{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
    console.log(`name is  ${this.name}, address is : ${this.add}`);
    }
}
let person1=new person('sagarika',25);
person1.add_Address('delhi');
person1.getDetails();


5. polymorphism:=
*/