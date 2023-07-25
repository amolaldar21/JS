function squareOfWordLength(arg1){
    console.log(`The length of the string is :- ${arg1.length}`)
    console.log(`The sqare of the given string is ${(arg1.length)**2}`)


}
squareOfWordLength("JavaScript")
squareOfWordLength("Google Chrome")
squareOfWordLength("Developer Smart")

console.log(`========No argument and no  return values===========`)
var nanr=function(){
    var str="I am Angular Developer"
    console.log(`The length of the string ${str.length}`)
    var twords =str.split(" ").length
    console.log(`The total number of ${twords} and the division of the string and words are ${str.length/twords}`)
    console.log(`The total number of ${twords} and the multiplication of the string and words are ${str.length*twords}`)
}
 nanr()
