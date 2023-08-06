// singleton 
// const tinderUser = new Object.create();
const tinderUser = {};
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const instaUser = {
    email: "johndoe@gmail.com",
    fullName:{
        userFullName:{
            firstName:"john",
            lastName: "doe"
        }
    }
}

// console.log(instaUser.fullName);
// console.log(instaUser.fullName.userFullName);
// console.log(instaUser.fullName.userFullName.firstName);

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

// how to combine two objs 
const obj3 = Object.assign({}, obj1, obj2); 
// const obj3 = {...obj1, ...obj2}; //using spread
// console.log(obj3);
// console.log(obj3[3]);

// Array of objects 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

/*
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //datatype = array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty('isLoggedIn'));
*/


// Object De-structre and JSON 

const course ={
    courseName: "js in hindi",
    coursePrice: 4999,
    instructor: "hitesh"
};

// alternate method to extract/access obj 

const {instructor} = course;
const {instructor: courseInstructor} = course; // changing the object key name(de-structure)
console.log(instructor);


// JSON -> JavaScript Object Notation
// {
//     "name": "dashvanth",
//     "courseName": "html in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


// json formatter -> used to understand the json api code, converts the code into diff formats like tree, form, text etc..