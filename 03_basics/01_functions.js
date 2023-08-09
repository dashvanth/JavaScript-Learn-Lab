// functions 

function sayMyName(){
    console.log("D");
    console.log("A");
    console.log("S");
    console.log("H");
}
sayMyName()// function calling 

// function addTwoNumbers(number1, number2){ //parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

// let result = addTwoNumbers(1,3); wrong!
const result = addTwoNumbers(4,5);
console.log("result: ",result);
addTwoNumbers(3, 4); //arguments


function loginUserName(username){
    if(username === undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in.`;
}
console.log(loginUserName());


function calCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calCartPrice(200, 300, 4000, 5000));


const user = {
    username : "dashvanth",
    password : 1001
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}, password is ${anyobject.password}.`);
}
// handleObject(user);
handleObject({
    username : "dash",
    password : 1100
})


const comedyFilms = [ 'AmericanPie', 'Hangover', 'Horriblebosses', 'wearethemillers'];

function favFilms(anyarray){
    console.log(`my 1st fav film is ${anyarray[0]} and 2nd fav is ${anyarray[1]}.`);
}
// favFilms(comedyFilms);
favFilms(['herapheri, golmaal'])