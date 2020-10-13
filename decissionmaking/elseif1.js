var num1=Number(prompt("Enter a number"))
var num2=Number(prompt("Enter a number"))
var num3=Number(prompt("Enter a number"))

if(num1>num2 && num1>num3){
    console.log("largest num is "+num1)
}
else if(num2>num1 && num2>num3){
    console.log("largest num is "+num2)
}
else if(num3>num1 && num3>num2){
    console.log("largest num is "+num3)
}
else{
    console.log("numbers are equal")
}