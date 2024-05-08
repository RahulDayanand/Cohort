// function sum(a,b,fncall){
//     const sum1 = a+b;
//     fncall(sum1)
// }

// function displayResult(result){
//    console.log(result);
// }

// function displayResultPassive(result){
//    console.log(result);
// }

// const ans = sum(10,5,displayResult);

// function calculateArithmetic(a,b,fncall){
//     const sum = fncall(a,b);
//     return sum;
// }

// function sum(a,b){
//    return a+b;
// }

// function sub(a,b){
//    return a-b;
// }

// const value = calculateArithmetic(10,5,sum);
// console.log(value)

function greeting(){
    console.log("Hello");
}

function greetings(){
    console.log("Hello Everyone");
}

setTimeout(greeting,1*1000);
setInterval(greetings,1*1000);

