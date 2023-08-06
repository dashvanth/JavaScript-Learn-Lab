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