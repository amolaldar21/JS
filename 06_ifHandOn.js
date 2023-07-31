function cheEvenOdd(arg){
if(arg%2==0){
    console.log(`The number ${arg} that you pass is "EVEN" `);
}
else {
console.log(`The number ${arg} that you pass is "Odd"`) ;
}
}
cheEvenOdd(45);
cheEvenOdd(70);
cheEvenOdd(67);
cheEvenOdd(98);


function cheStringLength(arg){
    if (arg.length>10){
        console.log(`the String "${arg}" contain more than 10 words`)
    }
    else{
        console.log(`the string "${arg}" contain less than 10 words `)
    }

}
cheStringLength("JavaScript - ES6")

function cheStringstart(arg){
if(arg.startsWith("Java")){
    console.log(`your ${arg} string start with word Java`)
}
else{
    console.log(`your ${arg} string not start with word Java`)
}

}
cheStringstart("JavaScript Language")
