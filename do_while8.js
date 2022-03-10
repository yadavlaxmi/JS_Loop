var i=0
sum=0
do{
  let readlineSync = require("readline-sync")
  var user=readlineSync.questionInt("enter a number")
  sum=sum+user
    console.log(sum)
    i++
  
}
while (i<10)