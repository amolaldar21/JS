var voteEligible= function(age){
    var ageValue= +age
if(age<=0 || age>130 || isNaN(ageValue)){
    console.log(`Invalid data ${age}`)
}
else{
    if(age<18){
        console.log(`Your is  ${age} and you are not eligible for vote`);
    }
    else{
        console.log(`Your age ${age} so your are eleigilble for vote`);
    }
}
}
voteEligible(45)
voteEligible(17)
voteEligible(8)
voteEligible(20)
voteEligible(-11)
voteEligible(200)
voteEligible(0)
voteEligible(null)
voteEligible(undefined)
