let readlineSync=require("readline-sync")
var number=readlineSync.questionInt("enter a number==")
var div=readlineSync.questionInt("enter a div==");
for(var i=0;i<number;i++){
  if (i%div==0){
  console.log(i)
  }
}