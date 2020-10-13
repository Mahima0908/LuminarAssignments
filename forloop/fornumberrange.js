var lower=Number(prompt("Enter lower number"))
var upper=Number(prompt("Enter upper number"))

var evensum=0
var oddsum=0
var i=0

for(i=lower;i<=upper;i++){
    if(i%2==0){
        evensum=evensum+i
    }
    else{
        oddsum=oddsum+i
    }
}
console.log("sum of even numbers is "+evensum )
console.log("sum of odd numbers is "+oddsum)