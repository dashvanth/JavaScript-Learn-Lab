// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

{
    // called as block of scope 
} 
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("Inner", a);
}

// console.log(a); a is not defined
// console.log(b); b is not defined
//console.log(c); // global variable

console.log(a);

function one(){
    let username = "dashvanth";

    function two(){
        let website = "youtube";
        //console.log(username); // can be used because it's a parent funciton

        function three(){
            let language = "hindi";
            console.log(website);
        }
        three();
        // console.log(language); lexical scope
    }
    two();
    // two();
    // console.log(website); lexical scope. cannot be accessed
}
// one()
// lexical scope -> outside/parent functions can't access inside/child funs. but child/parent funs can access.

if(true){
    let username = "dashvanth";
    if(username === "dashvanth"){
        let website = "youtube";
        console.log(username + website);
    }
    // console.log(website); lexical scope. 
}
// console.log(username); lexical scope



// ++++++++++++interesting++++++++++++++++++ 

addone(4); // normal functions works on hoisting
function addone(num){
    return num + 1;
}


// addTwo(6) -> fun expsn doesn't work on hoisting
// function expressions 
const addTwo = function(num){
    return num + 2;
}
// console.log(addTwo(6));