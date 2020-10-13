var arr=[10,20,30,40,50,60]
var num=prompt("enter a number")
var flag=0
for(i of arr){
    if(i==num){
        flag++
        break
    }
    else{
        flag=0
    }
}
if(flag>0)
{
    console.log("element found")
}
else{
    console.log("element not found")
}