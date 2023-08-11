for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element)

for( let i = 1; i<= 10; i++){
    // console.log(`Outer loop value: ${i}`);
    for( let j = 1; j <= 5; j++){
        // console.log(`Inner loop value: ${j}`);
        // console.log(i ,'*', j, '=', i*j );
    }
}

const myHeros = ["flash", "batman", "superman"];
// console.log(myHeros.length); 
for (let index = 0; index < myHeros.length; index++) {
    const element = myHeros[index];
    // console.log(element)
}

// break and continue 
for(let i = 0; i<=20;i++){
    // if(i==10){
    //     break;
    // }
    if(i==10){
        continue;
    }
    // console.log(`Value of i is: ${i}`);
}