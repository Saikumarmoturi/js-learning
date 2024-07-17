//if
const isUserLoggedIn = true;
const temperature = 321;
// if(temperature<50){
//     console.log("less than 50!");
// }
// else{
//     console.log("Greater than 50 ");
// }
// console.log("Execute");
// 3!=2
// 2<2;
// <, >, <=, >=, == , === , !==, 


// const score = 200;
// if(score>100){
//     const power = "fly";
//     console.log(`User Power ${power}`);
// }
// console.log(`User Power ${power}`);



// const balance = 1000;
// if(balance>500)
//     console.log("test"),
//     console.log("test3");

// if(balance<500){
//     console.log("Less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("Greater than 900");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2!==2){
    console.log("Allow To Buy Courses");
}

if(loggedInfromGoogle||loggedInFromEmail){
    console.log("User Logged In");
}

