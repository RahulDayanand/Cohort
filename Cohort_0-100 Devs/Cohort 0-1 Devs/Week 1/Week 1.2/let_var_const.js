var a=5;
a=3;
console.log(a);  //Global Scope

let b=5;
b=3;
console.log(b);  //Block Scope

const c=10;
c=6;    //Type Error 
console.log(c);  //Block Scope