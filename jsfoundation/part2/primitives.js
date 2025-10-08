let balance = 120;
let anotherbalance= new Number(120)
console.log(typeof balance);
//console.log(anotherbalance.valueOf);
//console.log(typeof anotherbalance);

let isActive =true
let isReallyActive = new Boolean(true) //not recommened

let firstname = null;
let lastname = undefined;
console.log(firstname);
console.log(lastname);

let myString = "hello";
let myStringOne = 'Hola'
let username = "rohan";

let oldGreet= myString+ "Rohan";
console.log(oldGreet);

let greetMessage = `Hello ${username}`;
let demoOne = `value is ${2+2}`;
console.log(greetMessage);
//console.log(demoOne);

let sm1= Symbol("hitesh");
let sm2 = Symbol("hitesh")

console.log(sm1);
