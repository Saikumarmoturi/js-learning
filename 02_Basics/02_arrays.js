const marvel_heroes = ["thor","IronMan","SpiderMan"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);


const another_array = [1,2,3,[4,5,6],7,[4,6,[54,3]]]
const real_another_arry = another_array.flat(Infinity)

console.log(real_another_arry);

console.log( Array.isArray("Hitesh"));
console.log( Array.from("Hitesh"));
console.log( Array.from({name:"Hitesh"})); //Interesting
console.log( Array.from(Object.keys({name:"Hitesh"})));
let score1= 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));







