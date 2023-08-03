let a=[4,5,6,4,5,8,5,7,8,9,7,8];
let b=[]
console.log("========= 1st way===========")
for(i=0;i<a.length;i++){
    for(j=0;j<b.length+1;j++){
        if(b.includes(a[i])){
            

            continue;
        }
        else{
            b.push(a[i])

        }

    }
}
console.log(b);
b.includes(a[i]) 
console.log("========= 2nd way===========")
for(i=0; i<a.length;i++){
    if(b.includes(a[i])){
        continue
    }
    else{
        b.push(a[i])
    }
}
console.log(b)
