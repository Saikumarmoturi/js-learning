const userEmail = []

if (userEmail) {
    console.log("Got user Emails");
}
else {
    console.log("Dont have user Email ");
}

// falsy Values:

// false, 0, -0, BigInt, 0n , "", null, undefied , NaN


//  All else are Truthy Values eg:

// true, 1 , "0" , 'false', " " , [], {}, function(){},


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null??10;
// val1 = undefined ?? 13;
// val1 = null ?? 10 ?? 13
// val1 = null ?? undefined ?? 13
console.log(val1);


// Ternary Operatior

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <=80  ? console.log("Les than 80") : console.log("More than 80");