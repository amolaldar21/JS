console.log("=============function string Basics ========================")

function stringBasics(){
    console.log(`My Dream company is ${"Infosys"}`)

}
// function call or function invocations
stringBasics()

console.log("=============function My Hobbies ========================")

function myHobbies(h1,h2,h3){

console.log(`My hobbies are=: ${h1},${h2},${h3}`)
var total=h1+h2+h3;
console.log(`Total number of character are in the hobbies ${total.length}`);

}
// function call or functions invocations
myHobbies("Playing Cricket","Reading books","listening music")


console.log("=============function String Hands On ========================")
// var s="  Hey you are doing well keep it up      ";

// console.log("=============step 1  ========================")

function stringHandsOn(){
var s="  Hey you are doing good keep it up      ";

console.log(`==========step 1 ===========`)
console.log(`The Given string is "${s}"`);

console.log(`==========step 2 ===========`)

console.log(`The length of the string is -: ${s.length}`)

console.log(`==========step 3 ===========`)

var t=s.trim()
console.log(`The length of the  original string before using TRIM :-${s.length} and the length of the string after using TRIM ${t.length}`)

console.log(`==========step 4 ===========`)

var e=s.length-t.length
console.log(`The total number of extra space is - : ${e}`)

console.log(`==========step 5 ===========`)

console.log(`First char afer trim : - ${t.charAt(0)} and last char after trim ${t.charAt(t.length-1)}`)

console.log(`==========step 6 ===========`);
var spl=t.split(" ")
console.log(`The total number of words are:- ${spl.length} and the words are:-[ ${spl}] `)


console.log(`==========step 7 ===========`)
console.log(` The index of word "good" is ${spl.indexOf('good')}`)

console.log(`==========step 8 ===========`)

console.log(`The substring started from number 22 using the sunstring method "${s.substring(22,s.length)}"`)
console.log(`The substring started from number 22 using the slice method "${s.slice(22,s.length)}"`)

console.log(`==========step 9 ===========`)

console.log(`Checking string  end with "up" of not ${t.endsWith("up")}`)

console.log(`==========step 10 ===========`)
console.log(`Checking string start with the word "Hey" or not ${t.startsWith("Hey")}`)


};
stringHandsOn()

