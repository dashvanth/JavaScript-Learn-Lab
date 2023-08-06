// objects part 1

// singleton 
// Object.create 

// objects literals 
 const mySym = Symbol("key1");
const jsUser = {
    name: "dashvanth",
    "fullName": "Dashvanth Raj Hc",
    [mySym]: "mykey1", //initialising sym in obj
    age: 20,
    location: "bengaluru",
    email: "dashvanth@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "wednesday", "friday"]
};

console.log(jsUser.email); //bad practice
console.log(jsUser["name"]); //alternate method to access objs
console.log(jsUser["fullName"]);
console.log(typeof jsUser[mySym]);

// changing values 
jsUser.email = "dashvanth@canva.com";
//Object.freeze(jsUser); //freezing an obj so we can't change value
jsUser.email = "dashvanth@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user!");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());