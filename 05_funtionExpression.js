console.log(`=====TCS  Eligibility===========`)
var result = function(gradScore,hscScore,sscScore,candidateName){
     var tcsResult=gradScore>=70 | hscScore>=80 | sscScore>=90 ? ` Congrates ${candidateName} You are selected for TCS interview` : `${candidateName} Unfortunately  you are not eligible for interview`
    console.log(tcsResult)
    };

    result(80,86,90,"Amol Aldar")
    result(70,65,75,"Yuvraj")
    result(60,79,88,"Sharad")
    console.log(`=====Male Marriage Eligibility===========`)

    function maleMarriageEligibility(gender,age,boyName){
       
        var check = gender=="Male" && age>=21 ? `Hey ${boyName} You are eligible for Marrige` :`Hey ${boyName} You are not eligible for Marrige`   
       console.log(check)
    };

maleMarriageEligibility("male",25,"Billgates")
maleMarriageEligibility("male",17,"stew Jobs")

console.log(`=====Female Marriage Eligibility===========`)
function femaleMarriageEligibility(gender,age,girlName){
       
    var check = gender=="Female" && age>=18 ? `Hey ${girlName} You are eligible for Marrige` :`Hey ${girlName} You are not eligible for Marrige`   
   console.log(check)
};

femaleMarriageEligibility("Female",16,"Jenifer")

femaleMarriageEligibility("Female",27,"Malinda Gates")