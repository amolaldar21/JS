function leapYear(year){
var year= +year
if(year<=0 || isNaN(year)){

    console.log(`plz enter valid year`);
}
else{
    if(year%4==0 && year%100 !=0)
    {
        console.log(`Year ${year} is a leap year`);
    }
    else if (year%400==0 && year%100 ==0)
    {
        console.log(`Year ${year} is a leap year`);
    }
else{
    console.log(`${year} is not leap Year`);
}
}

}
leapYear(2020)
leapYear(1999)
leapYear(1600)
leapYear(2022)
leapYear(1945)
leapYear(null)
leapYear("Twenty Twenty")
leapYear(undefined)
leapYear(NaN)
leapYear(1750)
