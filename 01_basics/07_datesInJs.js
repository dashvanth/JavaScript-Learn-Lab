// dates

let myDate = new Date();
console.log(myDate); //2023-08-05T03:35:52.207Z
console.log(myDate.toString()); //Sat Aug 05 2023 03:36:33 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

const createdDate = new Date(2023, 0, 23, 5,2);
console.log(createdDate.toString());

// let myCreatedDate = new Date(2023, 0, 1);
// let myCreatedDate = new Date(2023, 0, 1, 17, 3);
let myCreatedDate = new Date("9-14-2001");
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getMonth()+1); // +1 coz month starts from zero

console.log(`Today's date is ${newDate.getDate()}, and month is ${newDate.getMonth()}, and year is ${newDate.getFullYear()}.`);
//getday()->returns wrong day because it starts from 0-sun,1-mon so on.....

let anotherDate = new Date();
anotherDate.toLocaleString('default',{
    weekday: "long",
    
})
