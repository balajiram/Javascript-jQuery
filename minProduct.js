//sol: http://practice.geeksforgeeks.org/problems/minimize-sum-of-alternate-product/0

function swap(arr, from, to){
      var temp = arr[from];
      arr[from]= arr[to];
      arr[to] = temp;
}


function QuickSort(arr, start, end){

  if(typeof start === 'undefined'){
    start = 0;
  }
  if(typeof end === 'undefined'){
    end = arr.length-1;
  }

  if(start >=end){
    return;
  }

  var key = end, pivot= arr[key];
  end = end-1;

   var j = i = start;  
      
   while(j<key){
     if(arr[j]<pivot){
      swap(arr,j,i);
      i++; 
      }
     j++;   
   }
  swap(arr,key,i);
  QuickSort(arr,start,i-1);
  QuickSort(arr,i+1, end);
  
  
}
   
  
function minAlternateProduct(arr){
   //sorting the given array;
   QuickSort(arr);
   var sum = 0
   if(!arr || arr.length <3){
    return 0;
   }   
  //multiplying the element from with element from end;
  for(var i=0,len=arr.length-1,j=len; i<j; i++, j--){
   sum+=multiply(arr,i,j);

  }
  return sum;
}
  
function multiply(arr, a, b){
  return arr[a]*arr[b];
}
