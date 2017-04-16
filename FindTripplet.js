Find a triplet that sum to a given value

var arr =[12, 3, 4, 1, 6, 9];
var tot = arr.length;
var sol=[];

value = 24;

findTripplets([12, 3, 4, 1, 6, 9],24);

function findTripplets(arr, value){
  if(arr.length === 0 || value === undefined){
   return new Error('Invalid input');
  }
  var sol=[];
  var tot = arr.length;
	for(var i =0;i<tot;i++){
	   var firstElement = arr[i];
	   if(firstElement > value){
	    continue;
		}
	   for(var j=i+1;j<tot;j++){
		 var secondElement = arr[j];
		 var sum = firstElement+secondElement;
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
