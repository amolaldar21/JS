function test(a,b){
    console.log(a,b)
    var c=a+b+c
}
var a=test(10,20)
console.log(a) // if we take the variable without return in function it gives a undefined value
test(10,20,30) // we pass extra value than declared arguments then it not give a error it take only as per arguments and ignore other values
test(10) // we pass less value as per declared arguments then if give the undefined value for other argumnts

function test1(a,b,c){
    console.log(a,b,c)
    var d=a+b+c
    console.log(typeof d)
    return d
}
var e=test1(10,20,30)
console.log(e)
var e=test1("a","b",10)  // it specify that datatype is string
console.log(e)

var e= test1(5,6)
console.log(e)