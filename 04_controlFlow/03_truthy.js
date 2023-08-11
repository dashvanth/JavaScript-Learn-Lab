// truthy / falsy 
// Assuming a trule/false value is called truthy/falsy 

const userEmail = "dashvanth.ai";
if(userEmail){
    console.log("got user email");
}else {
    console.log("didn't got user email.")
}
// falsy values: false,0,null,undefined,-0,bigInt 0n,NaN, ""

// truthy values: except all falsy values all are truthy values. " ", "0", [], {}, function(){}

// const emptyArr = [];
// if(emptyArr.length === 0){
//     console.log("array is empty");
// }
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty")
// }


// Nullish coalescing operator (??); 

let val1;
// val1 = 5 ?? 10; 5
// val1 = null ?? 10; 10/right side value
// val1 = undefined ?? 15; 15

console.log(val1);


// Ternary Operator 
let iceTea = 90;
iceTea>50?console.log("ice tea is costly"):console.log("not costly");

let amount = 1000;
amount < 100?console.log("amount is greater"):console.log("amount is greater");