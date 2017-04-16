/*Find a triplet that sum to a given value
 Sample:-  
  Input: arr =[12, 3, 4, 1, 6, 9], value = 24;
  Output: [12,3,9];
*/
findTripplets([12, 3, 4, 1, 6, 9],24);

function findTripplets(arr, value){
  if(arr.length === 0 || value === undefined){
   return new Error('Invalid input');
  }
  var sol=[];
  var tot = arr.length;
	for(var i =0;i<tot;i++){
	   var firstElement = arr[i];
	   //if firstElement greater than value	
	   if(firstElement > value){
	    continue;
	   }
	   for(var j=i+1;j<tot;j++){
		 var secondElement = arr[j];
		 var sum = firstElement+secondElement;
		 //if first two elements sum greater than value
		 if(sum > value){
		   continue;
		 } 
		 var remain = value-sum;
		 var thirdElementPosition = arr.indexOf(remain);
		 if(thirdElementPosition !== -1 && thirdElementPosition > j){
		  sol.push([firstElement,secondElement,remain]);
		 }
	   }
	}
 return sol;	
}
