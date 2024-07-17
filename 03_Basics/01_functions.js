function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("I");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//     // if (typeof number1 == Number && typeof number2 == Number)
//         console.log(number1 + number2);;
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // console.log("Sai");
    // return result ; 
   return number1+number2;
}

const result = addTwoNumbers(12, 5);
// console.log(`Result:- ${result}`);

function loginUserMessage(userName="sam"){
    // if(userName === undefined){
    //     console.log("Please Enter the userName");
    //     return ;
    // }

    if(!userName){
        console.log("Please Enter the userName");
        return ;
    }
    return `${userName} just loggedin`;
}
// console.log(loginUserMessage("Sai"));

// console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(200,300,23,123))

const user ={
    userName:"Hitesh",
    price:199
}

function handleObject(anyObject){
    
    console.log(`userName is ${anyObject.userName} and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    userName:"Ssam",
    price:233
});

const myNewArr = [23,100,233,43]
function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([123,432]));