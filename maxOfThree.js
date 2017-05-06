function getMaxOfThree(arr){
 var highest, lowest, product2, product3;
 
 if(arr.length < 3){
   return new Error('array atleast have 3 elements');
 }
 
 highest = Math.max(arr[0], arr[1]);
 lowest = Math.min(arr[0], arr[1]);
 
 product2 = arr[0]*arr[1];
 product3 = null;
 for(let i=2,len=arr.length;i<len;i++){
  let element = arr[i];
  
  if((highest * element) > product2){
    product3 = product2*element;
	product2 = highest*element;
  }
  else if(lowest * element > product2){
    product2 = lowest*element;
	product3 = product2 * highest;
  }
  else if((!product3) || product2*element > product3){
    product3 = product2*element;
  }
  if(element > highest){
	  highest = element;
  }
  else if(element < lowest){
	  lowest = element;
  }
 }
 return product3;
}
