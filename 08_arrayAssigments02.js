const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11]
function operations(arg){
    console.log(arg);
    console.log(`The total elements available ${arg.length}`);
    console.log(`The elements ${arg[0]} and the last elements ${arg[arg.length-1]}`);
    console.log(`The last third elements of the array ${arg[arg.length-3]}`);
    console.log(`=========even position number=========`);
    for (let index = 0; index < arg.length; index=index+2) {
        const element = arg[index];
        console.log(` The elements on the  ${index} position ${element}`);
        
    }
    
    console.log(`=========odd position number=========`);
    for (let index = 1; index < arg.length; index=index+2) {
        const element = arg[index];
        console.log(` The elements on the  ${index} position ${element}`);
        
    }
    console.log(`=========Sum of even position number=========`);
    let sum=0
    for (let index = 0; index < arg.length; index=index+2) {
        const element = arg[index];
        console.log(` The elements on the  ${index} position ${element}`);
        sum=sum+element
        console.log(sum);
        
    }
    console.log(`=========Sum of odd position number=========`);
    let sum1=0
    for (let index = 1; index < arg.length; index=index+2) {
        const element = arg[index];
        console.log(` The elements on the  ${index} position ${element}`);
        sum1=sum1+element
        console.log(sum1);
        
    }
    console.log(`=========Sum of all array=========`);
    let sumall=0
    for (let index = 0; index < arg.length; index++) {
        const element = arg[index];
        console.log(` The elements on the  ${index} position ${element}`);
        sum1=sumall+element
        console.log(sum1);
        
    }

    let multileof5=[]
    for (let index = 0; index < arg.length; index++) 
    {
        const element = arg[index];
    
        if (element%5==0)
        {
            multileof5.push(element)
            
        }
        
        
    }
console.log(`The multiple of 5 numbers are ${multileof5}`);

console.log(`The Number 115 is available in array and answer is  ${arg.includes(115)}`);
console.log(`The Number 23 is available in array and answer is  ${arg.includes(23)}`);
console.log(arg);
console.log(`Inserting the Number 55 , 66 in array ${arg.splice(3,0,55,66)}`);
console.log(arg);
console.log(`deleting the 3 elements starting from index 4 ${arg.splice(4,3)}`);
console.log(arg);


}
operations(arrayNumber)

