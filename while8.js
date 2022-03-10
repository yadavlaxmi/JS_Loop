var i=0
sum=0
while (i<10){
  let readlineSync = require("readline-sync")
  var user=readlineSync.questionInt("enter a number")
  sum=sum+user
    console.log(sum)
    i++
  
}