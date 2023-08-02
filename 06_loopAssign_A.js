
// The sum of cube upto five numbers
function sumOfCube(number){
let sum=0
for (let index = 1; index <=5; index++) {
    
    sum=sum+(index**3)
}
console.log(`The sum of cube if all the number is ${sum}`);
}

sumOfCube(5)

 function oddPositionedChars(args){
    for(i=1;i<args.length;i=i+2){
        
        if (args[i]==" ") {
            continue;
           
            
        }
        else{
            console.log(i,args[i]);
        }
    }

 }
 oddPositionedChars("Hard work always pays back")
 oddPositionedChars("Soon I will be Angular It champ")