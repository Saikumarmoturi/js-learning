const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`Accu : ${acc} , CurrVal ${currVal}`);
//     return acc+currVal;
// },0)

const myTotal = myNums.reduce((acc,currVal)=>(acc+currVal),0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js Course",
        price: 2999
    },
    {
        itemName:"Python Course",
        price: 999
    },
    {
        itemName:"Mobile Course",
        price:2322
    },
    {
        itemName:"DataScience",
        price:12322
    }
]


const priceSum = shoppingCart.reduce((acc,item)=>{
    return acc+item.price;

},0)
console.log(`Price Sum ${priceSum}`);