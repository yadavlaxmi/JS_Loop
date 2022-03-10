let readlineSync = require("readline-sync")
var user=readlineSync.questionInt("enter a number")
sum=0
for(var i=0;i<user;i++){
  sum=sum+i
}
  console.log(sum)
