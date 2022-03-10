let readlineSync = require("readline-sync")
var user=readlineSync.questionInt("enter a number")
for(var i=0;i<user;i++)
  if (i%3==0 && i%7==0){
    console.log(i,"navgurukul")
  }
  else if(i%7==0){
    console.log(i,"gurukul")
  }
  else if(i%3==0){
    console.log(i,"nav")
  }