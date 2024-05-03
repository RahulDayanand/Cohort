// let names = {
//     firstName : "Rahul",
//     age : 18
// }

// console.log(names["age"]);

let AllNames = [{
    firstName : "Rahul",
    age : 24
},{
    firstName : "Pavan",
    age : 23
},{
    firstName : "Kiran",
    age : 23
},{
    firstName : "Vishal",
    age : 23
}]

for(let j=0;j<AllNames.length;j++){
    if(AllNames[j]["age"] == 24){
        console.log(AllNames[j]["firstName"]);
    }
}

