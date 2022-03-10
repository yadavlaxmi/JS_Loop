let readlineSync = require("readline-sync");
var number=readlineSync.questionInt("enter a number==");
  var i=0
  do{
  b=(i*number)
  console.log(i,"*",number,"=",b)
  i++
}
while(i<=10)