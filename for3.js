let readlineSync=require("readline-sync")
var number=readlineSync.questionInt("enter a number==");
for(var i=0;(i<=10);i++){
  b=number*i
  console.log(number,"*",i,"=",b)
}