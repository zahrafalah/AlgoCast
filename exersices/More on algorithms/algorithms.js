

//-----------------------------------------------------------
const index = (str,word)=>{
  let wLen = word.length,
      j= 0,
      index =0;
      // console.log(str.length);
  for(let i= 0; i< str.length; i++){
      // console.log(i);
      if(str[i] === word[j]){
        // console.log(word[j])
        j++;
      }else{
        j=0;
        }
      if (j==0){
        index = i
      }else if (j == wLen){
        return index;
      }
      }           
  }
index("Two days ago, I was walking with Jafar","Jafar");
//----------------------------------------------------------------

let Array =[1,2,5,7,9,10] 
const missed = (Array) => {
    let missYou=[];
     n = Array.length+1;
    let sum = 0;
    let expectedSum = n* (n+1)/2;
    for (let i =0; i<Array.length-1; i++) {
      sum += Array[i];
      if (Array[i+1] - Array[i] != 1){
        missYou.push(Array[i]+1);       
      }      
    }
    if (expectedSum != sum ){
      missYou.push(expectedSum-sum);
    }
    return missYou;
  }

missed(Array);
//-----------------------------------------------

const GCD = (a,b) => {

  let divisor = 2;
  let gcd = 1;
  while(a>divisor && b>divisor){
        if (a % divisor == 0 && b% divisor ==0){
          divisor == gcd;
        }
        else{
          divisor++;
        }
  }
  return gcd;
}
GCD(24,18);

const rand = (n) =>{
  const str = "abcdefghijklmnopqrstuvwxyz0123456789";
  let newStr = "";
  for (let i= 0;i<n;i++ ){   
      newStr += str[Math.floor(Math.random()* str.length)];      
  }
  return newStr;
}
rand(7);


//------------------------------------------------------------
//Prime function
const Array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

const prime = (Array) => {
  for(let i = 0; i<=Array.length; i++){
    // console.log(i);
    let n = Array[i]
    for(let j= 2 ; j<n; j++){
        // console.log(j)
        if(n% j === 0){
          Array.splice(i,1);  
        }
    }
  }
  return Array;
}
prime(Array);


//--------------------------------------------------------------
const fib = (n) => {
    if ( n<=1 ){
      return [0,1];
    }
    let arr = fib(n-1);
    arr.push(arr[arr.length-1]+arr[arr.length-2]);  
    return arr;
}
fib(5);

//------------------------------------------------------------------------------------------

//random function accept an integer and return a random string with length of n
const random = (n) => {
  
    // console.log(n)
    //Main string to choose letters from
    const string = "abcdefghijklmnopqrstuvwxyz1234567890";
    //creating new empty random string
    let newStr="";
    
    //itirating from 0 to n and creating n random indexes and ultimatly random letters from string
    //concatinating to the new string
    for (let i=1; i<=n; i++){
       newStr +=  string[Math.floor(Math.random() * string.length)];
    }
  
    //return the new random str
    return newStr;
  
  }
  random(7);

  //-------------------------------------------------------------
  function primeFactors(n){
    var factors = [], 
        divisor = 2;
    
    while(n>2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }
  
 primeFactors(69);

 //---------------------------------------------------------------
    