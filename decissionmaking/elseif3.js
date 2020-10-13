var num1=Number(prompt("Enter a number"))
var num2=Number(prompt("Enter a number"))
var num3=Number(prompt("Enter a number"))

if (num1>num2 && num1>num3){
    if(num2>num3){
        console.log("second largest number"+num2)
    }
    else{
        console.log("second largest number"+num3)
    }
}
else if(num2>num1 && num2>num3){
    if(num3>num1){
    console.log("second largest number"+num3)
    }
    else{
        console.log("second largest number"+num1)
    }
}
else{
    if(num2>num1){
        console.log("second largest number"+num2)
    }
    else{
        console.log("second largest number"+num1)
    }
}