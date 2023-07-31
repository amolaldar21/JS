function gradecalculation(marks){
    var marksValue = +marks
if(marks<=0|| marks>100 || isNaN(marksValue) ){
    console.log(`Please provide the valid Marks`);

}
else {
    if(marks>=90){
        console.log(`funtanstic marks : ${marks} Your grade is A+`);
    }
    else  if(marks>=75 && marks<90){
        console.log(`Excellent  marks : ${marks} Your grade is A`);
    }
    else if(marks>=50 && marks<75){
        console.log(`Good marks : ${marks} Your grade is B `);
    }
    else if(marks>=35 && marks<50){
        console.log(` marks is : ${marks} Your grade is c `);
    }


}

 
}
gradecalculation(98)
gradecalculation(80)
gradecalculation(90)
gradecalculation(0)
gradecalculation(150)
gradecalculation(-7)
gradecalculation(35)
gradecalculation(29)
gradecalculation(64)
gradecalculation(49)
gradecalculation("91")
gradecalculation("Eighty")
gradecalculation(undefined)
gradecalculation(null)



