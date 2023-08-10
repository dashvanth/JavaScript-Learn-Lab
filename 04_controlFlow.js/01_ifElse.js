// if , if else, else if
const isUserLoggedIn = true;
const temperature = 41;

if( temperature < 50){
    console.log("less than 50");
}else{
    console.log("greather than 50");
}
console.log("execute");

// >, <, >=, <=, ==, !=, ===(compares datataype)

const power = 200;

if(power > 100){
    let userPower = "fly";
    console.log("User power is ", userPower);
}
console.log(userPower)// userPower is not defined 

const balance = 950;
if(balance < 900){
    console.log("less than 900");
} else if (balance < 700){
    console.log("less than 700");

}else if (balance < 500){
    console.log("less than 500");

} else{
    console.log("greater than 900");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
