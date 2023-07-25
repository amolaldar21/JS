var greaterNumber = function(args1,args2){
    var greater = args1>args2 ? args1: args2
    console.log(`The greatest number is : ${greater}`)

}
greaterNumber(10,-10)
greaterNumber(800,-899)

var isEvenOddNum = function(args1){
    var result = args1%2==0 ? "Even": "ODD"
    console.log(`The number ${args1} is   ${result}`)

}
isEvenOddNum(29)
isEvenOddNum(44)
isEvenOddNum(0)
isEvenOddNum(101)
var isEvenOddNum1 = function(args1){
    var result = args1%2==0 ? " True": "False"
   return result

}
var result=isEvenOddNum1(11)
console.log(`the numer is ${result}`)

var wordLength = function(args1){
    
 var result = args1.length%2==0 ? " Even": "Odd"
   return result

}

var wordresult=wordLength("JavaScript")
console.log(`The word is "JavaScript" and length of word is ${"javascript".length} and this is :- ${wordresult}`)
var Wordresult=wordLength("developer" )
console.log(`The word is "developer" and length of word is ${"developer".length} and this is :- ${Wordresult}`)
var Wordresult=wordLength("Google")
console.log(`The word is "Google" and length of word is ${"Google".length} and this is :- ${Wordresult}`)

