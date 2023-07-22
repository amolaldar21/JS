console.log("============Question 1==============")
function intro(){
    console.log("HI")
    
}

intro()
function batch(){
    
    console.log("I am enrolled in CODEMIND ANGULAR B8 batch")
}
batch()
console.log("============Question 2==============")
function personalDetails(firstName,lastName,collegeName){
    console.log("My First Name :",firstName);
    console.log("My Last Name :",lastName);
    console.log("I completed my graduation from :",collegeName);
}
personalDetails("YUVRAJ","SINGH"," COEP");
console.log("============Question 3==============");
function swapValues(value1,value2){
    var temp 
    console.log("values before swap:","value1 :-",value1,"values2:-",value2)
    temp=value1
    value1=value2
    value2=temp
    console.log("values after swap:","values1:- ",value1,"values2:- ",value2)

}
console.log("============Question 3.2==============");
swapValues(1000,2000)
console.log("============Question 3.3==============");
swapValues("Virat","Anushka")

console.log("============Question 4==============");

function  addThreevalues(num1,num2,num3){
    var num=num1+num2+num3
    return num

}
console.log("============Question 4.2==============");
var result=addThreevalues(10.23,600,40)
console.log("addition :-",result)
console.log("============Question 4.3==============");
var result=addThreevalues("Hello ","Good ","Morning ")
console.log("addition:- ",result)

console.log("============Assignment no 2 ==============");
function bankDetails(bankName,accountNum,location,pinCode){
    console.log("Bank Name:- ",bankName,"," ,"accountNum:- ",accountNum,"," ,"loaction:- ",location,"," ,"Pincode: -",pinCode)
}
console.log("============Question 1.2.1==============");
bankDetails("CITY Bank",345678234,"Pune",431302)

console.log("============Question 1.2.2==============");
bankDetails("AXIS Bank",7856785621,"Mumbai",431310)
console.log("============Question 1.2.3==============");
bankDetails("HDFC Bank",745461545121,"Pune",431568,"OPEN")

