const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
var abc=function(arg){
    console.log(`Firts Elements of the arrays ${arg[0]}`);
    console.log(`Firts Elements of the arrays ${arg[arg.length-1]}`);
    console.log(arg.unshift("Papaya"));
    console.log(arrayFruits);
    console.log(arg.splice(4,1));
    console.log(`inserting Elements for the last position ${arg.push("Pineapple")}`);
    console.log(arg);
    console.log(`Inserting Dragon fruits before watermelon ${arg.splice(4,0,"Dragon Fruits")}`);
    console.log(arg);
    console.log(`Replaceing Elements Orange with Kiwi ${arg.splice(2,1,"Kiwi")}`);
    console.log(arg);
    console.log(`LOg the elements 1 to 4 ${arg.slice(1,4)}`);
    console.log(arg);
    console.log(`Log the last 3 elemenents from list ${arg.slice(arg.length-3)}`);
    console.log(arg);


}
abc(arrayFruits)
arrayFruits.unshift