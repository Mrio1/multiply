module.exports =  function multiply(first, second) {
  let arr1 = first.toString().split("").reverse();
  let arr2 = second.toString().split("").reverse();
  

  let multiArr = [];
  for (let i = 0; i < arr1.length; i++){
      for (let j=0; j < arr2.length; j++){
          if (multiArr[j+i]){
              multiArr[j+i] += arr1[i]*arr2[j];
          } else {
              multiArr[j+i]=arr1[i]*arr2[j]
          }
      }
  }

  for (let i = 0; i < multiArr.length+1; i++){
      if (multiArr[i]>=10){
          if(multiArr[i+1]){
              multiArr[i+1] += ((multiArr[i] - multiArr[i]%10) / 10 );
          
      } else {
          multiArr[i+1] = ((multiArr[i] - multiArr[i]%10) / 10 );
      } 
      multiArr[i]=multiArr[i]%10;
          
      } 

  }
      
      return multiArr.reverse().join(""); 
}
