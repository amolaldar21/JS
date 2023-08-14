let s=[10,11,12,13,7,15,66,88,77]
let even=[]
let odd=[]
for (let index = 0; index < s.length; index++) {
    if(s[index]%2==0){

        even.push(s[index])
    }
    else{
        odd.push(s[index])

    }

    
}
console.log(even);
console.log(odd);