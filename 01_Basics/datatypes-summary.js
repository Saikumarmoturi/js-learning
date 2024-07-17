// Primitive -> Call by Value , we get the values of copied 

// 7 types: String,Number, Boolean, null, undefined, Symbol, BigInt  

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id == anotherId);

const bigNumber = 2345432452345234523n
// console.log(typeof bigNumber);
// console.log(anotherId);


// Reference Type/ Non Primitive -> which allaocates directly to the reference 

// Arrays, Objects, Functions 

const heros = ["shaktiMan","naagraj","doga"];  //array;
const myObj = 
{
    name:"Sai",
    age:22
}

const myFunc = function(){
    console.log("Hello Sai ");
}

// console.log(typeof outsideTemp);
// console.log(typeof myFunc);
// console.log(typeof myObj);
// console.log(typeof heros);
// console.log(typeof id);




// +++++++++++++++++++++++++++

// Stack , Heap 

// Stack (primitive)
// Heap (Non-primitive)

let myYoutubeName = "saimoturidotcom"
let anotherName = myYoutubeName
anotherName = "chaiaurCode";
// console.log(anotherName);
// console.log(myYoutubeName);

let user1 = {
    email : "sk@gmail.com",
    upi : "user@ybl" 
}
let user2 = user1;
user2.email = "yt@yahoo.com"
console.log(user2.email);
console.log(user1.email);


















