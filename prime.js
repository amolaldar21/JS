
 //fetching prime number from list
function prime(array) {
    let prime=[]
  for (let i = 0; i < array.length; i++)
   {
    let num = array[i];

    let flag = true;
    for (let index = 2; index < num; index++)
     {
      if (num % index == 0) 
      {
        flag = false;
        console.log(`${num} is not a prime number`);
        break;
      }
    }
    if (flag == true)
     {
        prime.push(num)

      
    }
  }
  console.log(`prime number list is ${prime}`);
}
prime([2,6,7,8,91,15,19,21,27,29]);

// checking prime number 
function prime1(num){
    let flag=true
    for (let index = 2; index < num; index++) {
        if(num%index==0){
            flag=false
            console.log(`${num }is not a prime number`);
            break;

        }

        
        
    }
    if(flag==true){
        console.log(`${num} is prime number`);
    }
}
prime1(19)