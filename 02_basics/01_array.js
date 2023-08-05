// array 

let arr = [0, 1, 2, 3];
let myarr = ["shaktimaan", 2, "naagraj"]

let anotherArr = new Array(1,2,3,4,5);
console.log(anotherArr);


// array methods 

let newArr = [0, 1, 2, 3, 4, 5];
newArr.push(6); //inserts at end
newArr.pop(); // removes at end
console.log(newArr);

newArr.unshift(9); //insert at begin
newArr.shift(); //removes at begin

console.log(newArr.includes(4));
console.log(newArr.indexOf(2));

const newArr2 = newArr.join();
console.log(newArr2); //joins the two arrays&converts it to string

// slice, splice  

// slice - gives the part you want and doesn't change the original value and doesn't include last range
let Array1 = [0, 1, 2, 3, 4];
const Array2 = Array1.slice(1,4);
console.log(Array2);
console.log("the orginal value will not changed");
console.log(Array1);

// splice() -> gives part you want and changes in original value and does include last range
const ar1 = [1,2,3,4,5,6,7];
const ar2 = ar1.splice(0,5); //changes in org value and includes last range
console.log(ar2);
console.log("ar1=", ar1);