const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNumbers = myNumbers.map( (num) =>{
//     return num + 10;
// })
// console.log(newNumbers);

// method chaining 
const newNumbers = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40) //true and false game
// const newNumbers = [];
// myNumbers.forEach( (num) => {
//     newNumbers.push( num +20)
// })
console.log(newNumbers);
