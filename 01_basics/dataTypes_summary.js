// Primitive

// 7 types: string, number, boolean, null, undefined, bigInt, symbol(storing uniquely)

let score = 100;
let scoreValue = 100.3;
console.log(typeof score);

let isLoggedIn = false;
let outsideTemp = null;
let userEmail;
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);


let id = Symbol('123');
let anotherId = Symbol('123');
console.log(typeof anotherId);

console.log(id === anotherId);

const bigNumber=31241424114124215n;
console.log(typeof bigNumber);


// Js is a dynamically typed language bcoz we don't need to say which type of data we're storing or defining. [ex: let a=20, a="dashvanth"] in other lanbuages[ex: int a=10, char='d']

// Reference (Non-Primitive)
// Array, Objects, functions

const heros = ["shaktimaan", "jackieChan", "Bheem"];
console.log(typeof heros);

let myObj={
    Name: "dashvanth", 
    age: 22, 
};
console.log(typeof myObj);

const myFun= function(){
    console.log("hello world");
}
myFun();  //function calling
console.log(typeof myFun);


// +++++++++++++++++++++++++++++++++++

// Stack (primitive), heap (Non-primitive)

let myYoutubeName = "itsonyou";
let anotherName = myYoutubeName;

anotherId = "onyouown";

console.log(myYoutubeName);
console.log(anotherId);


let userOne = {
    email: "dashvanth@goog.com",
    password: 121212
};

let userTwo = userOne;

userTwo.email="dash@google.com"
console.log(userTwo);
console.log(userOne);