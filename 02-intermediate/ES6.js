// filter 
const myArray= [1,2,3,4,5,6,7,8]
const myFilterArray = myArray.filter((item) =>{
    return item > 4
})
console.log(myFilterArray);

const FilterArray = myArray.forEach((data) => {
    if(data>5){
        // return data;
        console.log(data)
    }
});
console.log(FilterArray);

// Map method

const arrayNumbers = [2,4,6,8,10]
const changeArray = arrayNumbers.map( (value) =>{
    return value + 2;
})
console.log(changeArray);

// chaining

const chainingArray = [3,4,6,7,8,9,10]
const updateArray = chainingArray.map((data)=> data+ 10)
                                  .map((data)=> data* 10)
                                  .filter((data)=> data>50)
console.log(updateArray);

// reduce method 

// const arrOfNum = [1,2,3,4,5]
// const reduceArray= arrOfNum.reduce(function(accumulator,currentValue){
//     console.log(`accumulator ${accumulator} and $(currentValue)`)
//     return accumulator + currentValue
// },0)
// console.log(`Our Final value=${reduceArray}`);

// const arrOfNum = [1,2,3,4,5]
// const reduceArray= arrOfNum.reduce(function(accumulator,currentValue){
//     console.log(`accumulator ${accumulator} and $(currentValue)`)
//     return accumulator + currentValue
// },5)
// console.log(`Our Final value=${reduceArray}`);

// reduce method using array function:=

const modifiedArray = arrOfNum.reduce((acc,currVal)=> acc+ currVal,0)
console.log(`our reduced Array =${modifiedArray}`);
const books = [
    {title: 'b1',genre: 'Fiction',publish:1981,edition:2004},
    {title: 'b2',genre: 'Non-Fiction',publish:1982,edition:2008},
    {title: 'b3',genre: 'History',publish:1983,edition:2007},
    {title: 'b4',genre: 'Non-Fiction',publish:1985,edition:2010},
    {title: 'b5',genre: 'Science',publish:1986,edition:2014},
    {title: 'b6',genre: 'Fiction',publish:1989,edition:2010},
    {title: 'b7',genre: 'History',publish:1984,edition:2019},
    {title: 'b8',genre: 'Science',publish:1990,edition:2016},
    {title: 'b9',genre: 'Fiction',publish:1999,edition:1989},
];
const findGenre = books.filter((fg) =>fg.genre==='NoN-Fiction')
const filterData = books.filter((fd) =>{return fd.genre==='History' && fd.edition>=2006})
console.log(filterData);
//set method
 
//How to create a set ?
    const mySet = new Set();
    //Add elements to the set
    mySet.add(4);
    mySet.add(6);
    mySet.add(6);
    mySet.add(7);
    mySet.add(6);
    mySet.add(8);
    mySet.add(7);
    mySet.add(9);
    mySet.add(10);
    console.log(mySet);    
//How to get length or size of set.
    const mySetSize = mySet.size;
    console.log(mySetSize);

//Delete an element from the set
    const deleteElement = (mySet.delete(7))
    console.log(deleteElement);
    console.log(mySet);

//check element is existing or not
    console.log(mySet.has(8));