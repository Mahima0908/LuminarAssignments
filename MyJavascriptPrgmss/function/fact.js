var num=Number(prompt("enter the number"))
function fact(n){
    var f=1
    var i=0
    while(i<=n)
    {
        f=f*i
        i++
    }
    return(f)
}
var data=fact(num)
console.log("fact="+data)