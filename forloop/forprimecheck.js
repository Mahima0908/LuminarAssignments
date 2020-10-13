var num=Number(prompt("Enter a number"))
var i,flag=0
for(i=2;i<=num;i++){
    if(num%2==0){
        flag=1
        break
    }
    else{
        flag=0
    }
}
if(flag>0){
    console.log("not prime")
    }
    else{

    console.log("prime")
    }