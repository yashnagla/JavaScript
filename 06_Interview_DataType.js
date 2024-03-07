// Primitive types :- In JavaScript, there are 7 types :- String, Number, Boolearn, null, undefined, symbol and BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber =  1234567789098764322456778098765432123456790987564321n


// Non Primitive (Reference) Type :- In JavaScript, there are 3 types :- Array, Objects and Function

// Array
const heros = ["Shaktiman", "Naagraj", "Doga"]
// Object
let myObj = {
    Fname: "Yash",
    age: 22,
    city: "Delhi"
}
// Function
const myFunction = function(){
    console.log("Hello World!!");
}

console.log(typeof  bigNumber);
// https://262.ecma-international.org/5.1/#sec-11.4.3