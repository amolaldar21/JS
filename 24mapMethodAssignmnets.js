const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19]
console.log("====================ORIGINAL ARRAY====================");
console.log(arrayNumber);

console.log("====================ADDING 10  =========================");
const add10=arrayNumber.map((cur,index,arrayNumber)=>{
return cur+10

})

console.log(add10);
console.log("==================CALCULATING CUBE====================");
const cube=arrayNumber.map((cur,index,arrayNumber)=>{
    return cur**3
    
    })
console.log(cube);
console.log("===================ADDING NUMBER AND INDEX====================");

const addingIndex=arrayNumber.map((cur,index,arrayNumber)=>{
    return cur+index
    
    })
console.log(addingIndex);

