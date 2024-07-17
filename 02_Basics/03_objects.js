// SingleTon
// Object.create()



// Object Literals 

const mySym = Symbol("key1")


const Jsuser = {
    name: "Sai ",
    "full Name": "Sai Kumar",
    age: 18,
    location: "hyderabad",
    email: "Sai@gmail.com",
    education: "Mtech",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"],
    [mySym]: "myKey1Symbol"
}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full Name"]);
// console.log(Jsuser[mySym]);


Jsuser.email = "sai@google.com"
// console.log(Jsuser.email);
// Object.freeze(Jsuser)
Jsuser.email = "sai@chat.com"
// console.log(Jsuser);
// console.log(Jsuser.email);


Jsuser.greetings = function(){
    console.log(`Hello JS user ${this["full Name"]}`);
}
console.log(Jsuser);
console.log(Jsuser.greetings());