const coding = ["python", "java", "c++", "js", "c"];
// coding.forEach(function (item) {
//     console.log(item);
// });

coding.forEach((item) => {
    // console.log(item);
});
// callback function -> doesn't contain fun name 


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);


coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})

const myCoding = [
    {
        langaugeName : "javascript",
        fileName: "js"
    },
    {
        langaugeName : "python",
        fileName: "py"
    },
    {
        langaugeName : "java",
        fileName: "java"
    },
];
myCoding.forEach((key)=>{
    console.log(key.langaugeName)
})