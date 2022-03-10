let readlineSync = require("readline-sync");
var number=readlineSync.questionInt("enter a number==");
var i=0
while(i<=10){
  b=(i*number)
  console.log(i,"*",number,"=",b)
  i++
}
