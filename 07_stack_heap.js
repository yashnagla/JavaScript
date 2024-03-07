// Memories

// Stack is used for Primitive Data Types
let myYoutube = "YashNagla"

let anotherName = myYoutube

anotherName = "Yash Aur Code"

console.log(myYoutube);
console.log(anotherName);


// Heap is used for Non-Primitive Data Types
let userOne = {
    email : "userOne@gmail.com", 
    password: "1234",
    upi : "user@upi"
}

let userTwo = userOne

userTwo.email = "yash@google.com"

console.log(userOne.email);
console.log(userTwo.email);