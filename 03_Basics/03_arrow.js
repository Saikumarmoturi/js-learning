const user = {
    username : "Sai",
    price: 999,
    welcomemessage: function (){
        console.log(`${this.username} , Welcome to website `);
        console.log(this);
    }

}
// user.welcomemessage()
// user.username = "Sam";

// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username = "Sai"
//     console.log(this.username);

// }

// console.log(chai());

// const chai = function(){
//     let username = "Sai"
//         console.log(this.username);
// }
// chai()


const chai = ()=>{
    let username = "Sai"
    console.log(this);   
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(2,3));




// const addTwo = (num1, num2) =>  num1+num2

// const addTwo = (num1,num2) =>(num1+num2)


const addTwo = (num1,num2) => ({username : "Sai"})

const myArray = [2,4,5,6,7]
// myArray.forEach(()=>())

console.log(addTwo(2,3));