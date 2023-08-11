const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`Accumulator value: ${acc}, current value: ${curval}`)
//     return acc + curval;
// }, 9)
const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0)
console.log(myTotal);

const shoppingCart = [
    {
        courseName: "js course",
        coursePrice: 2999
    },
    {
        courseName: "css course",
        coursePrice: 999
    },
    {
        courseName: "html course",
        coursePrice: 999
    },
    {
        courseName: "react course",
        coursePrice: 1999
    }
];

const priceToPay = shoppingCart.reduce( (acc, item) => {
    console.log(`GST : ${acc}, price : ${item.coursePrice}`)
    return acc + item.coursePrice
}, 0)

console.log(priceToPay);

