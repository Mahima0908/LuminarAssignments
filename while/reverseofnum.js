var num=Number(prompt("Enter a number"))
var rev=0
var digit=0
while(num!=0){
    digit=num%10
    rev=(rev*10)+digit
    num=parseInt(num/10)
}
console.log(rev)