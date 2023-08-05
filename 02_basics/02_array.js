// array part 2 

const  marvelHeroes = ["spiderman, thor, ironman"];
const dcHeros = ["batman", "flash", "superman"];

// marvelHeroes.push(dcHeros);

// console.log(marvelHeroes);
// console.log(marvelHeroes[1][1]);

// let allHeroes = marvelHeroes.concat(dcHeros);
// console.log(allHeroes[3]);

// spread oprtr->easy method to combine arrays 

const allHeroes = [...marvelHeroes, ...dcHeros];
console.log(allHeroes[1]);
 

const anotherArr = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]];
let realAnotherArr = anotherArr.flat(Infinity); //spreads all the eles into single array
console.log(realAnotherArr);

console.log(Array.isArray('dashvanth'));
console.log(Array.from('dashvanth'));
console.log(Array.from({name: "dashvanth"})); //interesting

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3)); //used to convert into arrays