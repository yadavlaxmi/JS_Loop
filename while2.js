let readlineSync = require("readline-sync")
user=readlineSync.questionInt("enter the number")
var i = 0;
sum=0
while (i<=user){
sum = sum + i
i++
}
console.log(sum)


