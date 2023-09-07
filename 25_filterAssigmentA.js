const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19]

// 1 number>50
console.log("===================Greater than 50======================");
const numGrater50=arrayNumbers.filter((num)=>{
return num>=50;
})
console.log(numGrater50);
// even number
console.log("===================Even number======================");
const e1=[]
const even=arrayNumbers.filter((num)=>{
    if(num%2==0){
        e1.push(num)
    }
  
    

    })
console.log(e1);

/*  even number 2 method
const even=arrayNumbers.filter((num)=>{
   
    return num%2==0;

    })
console.log(e1);*/
console.log("===================Odd number======================");
const odd=arrayNumbers.filter((num)=>{
   
    return num%2==1;

    })
    console.log(odd);

    console.log("===================Multiple of 5======================");

const muiltiple5=arrayNumbers.filter((num)=>{

    return num%5==0;

    })
    console.log(muiltiple5);
const range=arrayNumbers.filter((num)=>{

    return (num>20) && (num<=50);

    })
    console.log(range);