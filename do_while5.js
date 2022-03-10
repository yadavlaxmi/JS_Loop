let readlineSync= require("readline-sync")
var a=readlineSync.question("enter a word==")
i=a.length-1
str=" "
do{
str=str+a[i]
i--

if (a==str){
  console.log("palindrome")
}
else{
  console.log("not palidrome")
}
}
while(i>=0)


