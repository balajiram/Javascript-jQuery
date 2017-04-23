//http://practice.geeksforgeeks.org/problems/sort-in-specific-order/0
function customSort(arr){

//divide the arr into odd, even subsets
for(var head =0, len = arr.length-1, tail= len; head<tail;head++){
  var isheadEven = (arr[head]%2 === 0);
   
  if(isheadEven){
    tail = swapWithTailOdd(arr,head,tail);
    tail--;
  }
  
}

//console.log("*");
if(arr[head]%2 === 0){
  head = head -1;
}
//sorting in descending
QuickSort(arr,0,head,'dsc');
//sorting in ascending
QuickSort(arr,head+1,arr.length-1);


}

function swapWithTailOdd(arr,head, tail){


  //moving the tail pointer to odd element
  while(tail >head && (arr[tail]%2 === 0)){
    tail-=1;
  }
  
  swap(arr,head,tail);
   
  return tail;

}


function swap(arr, from ,to){
 if(from === to)
  return ;
  var temp = arr[from];
  arr[from]= arr[to];
  arr[to] = temp;
}


function QuickSort(arr, start, end, sortOrder){

  if(typeof start === 'undefined'){
    start =0;
  }
  if(typeof end === 'undefined'){
    end = arr.length-1;
  }
  

  if(start === end || start < 0 || end < start){
     return ;  
  }
  
 var pivot = arr[end], key = end,
     movingPtr = start,
     positionPtr = start;
  
 end =end-1;

 while(movingPtr <= end){
   if(sortBy(arr[movingPtr], pivot, sortOrder)){
     swap(arr, positionPtr, movingPtr);
     positionPtr++;
   }
  movingPtr++; 
 }

swap(arr, positionPtr, key);
QuickSort(arr, start, positionPtr-1,sortOrder);
QuickSort(arr, positionPtr+1, key, sortOrder);
}

function sortBy(a, b, sortOrder){
  return ((sortOrder && sortOrder === 'dsc') ? ( a >= b ) : (a <= b)); 
}
