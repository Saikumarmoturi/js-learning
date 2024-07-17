const name = "Sai ";
const repoCount = 50;
// console.log(name + repoCount + " Value");


// String Interpolation
// console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`);


const gameName = new String("hitesh-hc");
// console.log(typeof gameName);
// console.log(gameName.__proto__
//     );

// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);
//Negtive Indexing doesnot work in String

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Sai kumar    "
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());


const url = "https://sai.com/sai%20Kumar"

console.log(url.replace("%20","-"));

console.log(url.includes('sai'));

const nameTwo = new String("Sai-kumar-msk")
console.log(nameTwo.split("-"));