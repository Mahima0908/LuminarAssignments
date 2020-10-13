var low=Number(prompt("enter the lower number"))
var upp=Number(prompt("enter the upper number"))
var i,j,flag=0
for( i=low;i<=upp;i++){
    for(j=2;j<i;j++){
    if(i%j==0){
        flag=1
        break
    }
    else{
        flag=0
    }
}
if(flag==0)
{
    console.log(i)
}
}