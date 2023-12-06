/*
    *  Array is a object which can store similar type of data in a contigious memory location.
    *  Array index start from 0.
*/

// const myArr = [3,4,5,6,7,8,9]
// console.log(myArr[0])

// const myarr=["gift",1,true]
// console.log(myarr[1])

// const Myarr=new Array(1,2,3,4);
// console.log(Myarr);

// Array method
const myArray = [1,2,3,4,5,6,7]
// console.log(myArray)

// myArray.push(2)
// console.log(myArray)

// myArray.pop()
// console.log(myArray)

// myArray.unshift(9);
// console.log(myArray); //[0,1,2,3,4,5]

// myArray.shift();
// console.log(myArray); //[0,1,2,3,4,5]

/*
push():= method adds new items to the end of an array
pop():= removes the last element of an array.
unshift:= Add a new element in 1st index
shift:= remove a element from 1st index
*/
// console.log(myArray.includes(5));
// console.log(myArray.indexOf(7));
// console.log(myArray.indexOf(19));
// console.log(myArray);

// const demoArray=myArray.join();//join:- works on converting a array to string.
// console.log(demoArray);
// console.log(typeof demoArray);

// console.log("A",myArray);
// const myArr1=myArray.slice(2,5);//The slice() method selects from a given start, up to a given end.
// console.log(myArr1);

// console.log("B",myArray);
// const myArr2=myArray.splice(2,6);
// console.log(myArr2);

// const cars=["maruti","alto","xuu","waynor"]
// const supercars=["bmw","auto","nbbierfl","ebj"]
// cars.push(supercars);
// console.log(cars);

// cars.concat(supercars);
// console.log(cars);

// const allcars=cars.concat(supercars);
// console.log(allcars);

// const allNewcars=[...cars,...supercars];//... spread operator.
// console.log(allNewcars);

// const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realAnotherArray=anotherArray.flat(Infinity);
// console.log(realAnotherArray);


const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5[6,3[9,10]]]]]
const realAnotherArray=anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("Shubhashree"));
console.log(Array.from("Shubhashree"));
/*  
    *isArray:- is a method to check whether it is a array or not.
    *from:- is a method in which we create that automatically creates a array.
*/