var n=require("readline-sync");
const num=n.question("enter number: ");
let i=2
for(var count=0;i<10;i++)
if(num%i==0){
  count=count+1
}
if (count==0) {
  console.log("prime number")
}
else {
console.log("not prime number")
}