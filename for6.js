const n=require("readline-sync");
var name=n.question("enter name:")
const store=name;
var string=""
for (let i=store.length-1;i>=0;i--) {
   string=string+store[i]
}
if (store===string) {
   console.log("its palindrome string")
}
else {
   console.log("it's not a palindrome string")
}