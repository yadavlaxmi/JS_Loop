sum=0
for (var i=0;i<10;i++){
  let readlineSync = require("readline-sync")
  var user=readlineSync.questionInt("enter a number")
  sum=sum+user
  console.log(sum)

}