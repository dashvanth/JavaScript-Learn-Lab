const user = {
    username: "dashvanth", 
    price : 999, 


    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// console.log(this); window obj
user.username = "ananya";
// user.welcomeMessage();
// console.log(this);
// this -> refers to the current context 
// ex: console.log(this); refers to the window object which is a global


// browser global obj = window 

// function chai(){
//     let username = "dashvanth";
//     // console.log(this.username);not works like objs
// }
// chai();

// const  chai = function(){
//     let username = "dashvanth";
//     console.log(this.username);
// }

// Arrow function 
// difference between arrow fun & fun -> 
// const  chai = ()=>{
//     let username = "dashvanth";
//     console.log(this.username);//this also not work
// }
// chai();


// function addTwo (num1, num2){
//     return num1 + num2;
// }
// console.log(addTwo(4,3));
// arrow 
// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }

// implicit return 
// {}-> you have to give return keyword 
// const addTwo = (num1, num2) =>{return num1 + num2};
// () -> don't have to give return keyword
const addTwo = (num1, num2) =>(num1 + num2);
console.log(addTwo(4,3));

// arrow fun object 
const arrowFunObj = ()=>({username: "dashvanth"})
console.log(arrowFunObj());