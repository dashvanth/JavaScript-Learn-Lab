
// ["", "", ""]
// [{}, {}, {}] 
const Arr = [1,2,3,4,5];
for (const num of Arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    // console.log(`Each character is: ${greet}`);
}

// maps 
const map = new Map();
map.set('IN', 'india');
map.set('US', 'united states');
map.set('FR', 'France');
// map.set('IN', 'india'); values is unique

// console.log(map);

// for(const key of map){
//     console.log(key);
// }
// destructure 
for(const [key, value] of map){
    // console.log(key, ':-', value);
}


// const myObj = {
//     'game1' : "NFS",
//     'game2' : "spiderman"
// }
// for(const {key, value} of myObj){
//     console.log(key, ':', value); 
// }
// doesn't work 