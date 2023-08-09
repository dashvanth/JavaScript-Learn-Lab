// immediately Invoked Functions Expressions -IIFE 
// ()();
// to remove the global scope pollution we use iife

// named IIFE 
(function chai(){
    console.log("DB CONNECTED"); 
})();

// ()//paramerter();//execution. ()();->syntax of iife

// simple/unNamed IIFE 
// (()=>{
//     console.log("DB CONNECTED TWO");
// })();

((fullName)=>{
    console.log(`DB CONNECTED TWO ${fullName}`);
})("dashvanth");