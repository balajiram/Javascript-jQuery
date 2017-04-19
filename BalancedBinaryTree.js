/**
*Creating the balanced binary tree from the sorted array
*/

function makeBalancedTree(arr,start,end){
   if(!arr)
    return null;
   if(typeof(start) === 'undefined'){
    start = 0;
   }
   if(typeof(end) === 'undefined'){
    end = arr.length-1
   }
   var middle = Math.floor((start+end)/2);
   var root = new Node(arr[middle]);
   if(start!== middle){
    root.left =  generateTree(arr, start, middle-1);
   }
   if(end !== middle){
    root.right = generateTree(arr,middle+1,end);
   }
return root;
}

//Sample input
var arr = [0,6,8,9,15,17,19];
makeBalancedTree(arr);
