//const score = 400;
// console.log(score);

// const newScore = new Number(100);
// console.log(newScore);
// console.log(newScore.toString().length);
// console.log(newScore.toFixed(2));

// const otherNumber = 125.8920;
// console.log(otherNumber.toPrecision(4));

// const demoNumber = 1000000;
// console.log(demoNumber.toLocaleString());

//---------------------------------------------------
//Math

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));    //high value
// console.log(Math.floor(4.9));   //low value

// console.log(Math.random());         //random() :-gives random value between o and 1
// console.log(Math.random());

// suppose random value lies between 10 to 20
const min = 10;
const max = 30;
console.log(Math.floor(Math.random() * (max-min + 1)) + min);