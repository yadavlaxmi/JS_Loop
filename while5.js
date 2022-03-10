

var a=require("readline-sync").questionInt("enter str:")
i=a.length-1
 str=""
while (i>=0){
  str=str+a[i]
  i--
}
if (a==str){
  console.log("palindrome")
}
else{
  console.log("not palindrome")
}