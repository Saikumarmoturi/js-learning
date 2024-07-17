// var c = 32
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log(a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "Sai";

    function two(){
        const website = "youtube"
        // console.log(userName);
    }
    // console.log(website);
    two()
}

one()

if(true){
    const userName ="Sai";
    if(userName == "Sai"){
        const website = "youtube";
        // console.log(userName + website);
    }
    // console.log(website);
}

// console.log(userName);


// +++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++

addone(4)
function addone(num){
    return num + 1;
}
// console.log(addone(5));

addTwo(5);

const addTwo = function(num){
    return num + 2;

}
