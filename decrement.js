let i;
let sum=0;
for(i=50;i>=1;i-=5){
    let n=require("readline-sync").questionInt("enter number:");
    sum+=n
}
console.log(sum)