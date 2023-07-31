function monthOfYear(num){
    var numchange= +num
    if(num<=0 || isNaN(numchange) || num>12){
        console.log(`Plz Provide valid month number between 1 to 12`);

    }
    else{
    switch (num) {
        case 1:
            console.log(`The num ${num} and month is January`);
            
            break;
        case 2:
            console.log(`The num ${num} and month is February`);
            
            break;
        case 3:
            console.log(`The num ${num} and month is March`);
            
            break;
        case 4:
            console.log(`The num ${num} and month is April`);
            
            break;
        case 5:
            console.log(`The num ${num} and month is May`);
            
            break;
        case 6:
            console.log(`The num ${num} and month is June`);
            
            break;
        case 7:
            console.log(`The num ${num} and month is July`);
            
            break;
        case 8:
            console.log(`The num ${num} and month is August`);
            
            break;
        case 9:
            console.log(`The num ${num} and month is September`);
            
            break;
        case 10:
            console.log(`The num ${num} and month is Octomber`);
            
            break;
        case 11:
            console.log(`The num ${num} and month is November`);
            
            break;
        case 12:
            console.log(`The num ${num} and month is December`);
            
            break;
            
    
        default:
            console.log(``);
            break;
    }
}
}
monthOfYear(0)
monthOfYear(2)
monthOfYear(5)
monthOfYear(null)
monthOfYear(undefined)
monthOfYear(15)
monthOfYear(100)