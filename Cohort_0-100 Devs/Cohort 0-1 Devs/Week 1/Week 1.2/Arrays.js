// let array = [0,1,2,3,4,5,6,7,8,9,10];

// for(let i=0;i<=array.length;i++){
//     if(array[i] % 2 === 0){
//         console.log(array[i]);
//     }
// }

// let biggestNumber = array[0];
// for(let i=1;i<=array.length;i++){
//     if(array[i] > biggestNumber){
//        biggestNumber = array[i];   
//     }
// }

// console.log(biggestNumber);

// let names = ["Rahul","Priya","Anand"];
// let gender = ["male","female","male"];

// for(let i=0;i<=names.length;i++){
//     if(gender[i] === "male"){
//         console.log(names[i]);
//     }
// }

let originalarray = [1,2,3,4,5,6,7,8];

let start = 0;
let end = originalarray.length - 1;

while(start < end){

    let temp = originalarray[start];
    originalarray[start] = originalarray[end];
    originalarray[end] = temp;

    start++;
    end--;

}

console.log(originalarray);
