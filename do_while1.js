let readlineSync = require("readline-sync")
var user=readlineSync.questionInt("enter a number")
var i=0
sum=0
do{
  sum=sum+i
  console.log(sum)
  i++
}
while (i<=user)