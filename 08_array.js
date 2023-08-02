let array=[10,20,30,50,10,80,20];
console.log(array);
console.log(typeof array);
console.log(array.length);
let element=array[2]
console.log(`elements strord at index is${element}`);
console.log(`=====Array Traversing`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
console.log(`=====Array Traversing in reverse order`);
for (let index = array.length; index >= 0; index--) {
    const element = array[index];
    console.log(element);
}
