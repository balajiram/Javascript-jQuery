//http://practice.geeksforgeeks.org/problems/check-if-two-arrays-are-equal-or-not/0

function isEqual(arr1, arr2){
  

  var hashTable ={};
  
  var matchCount = 0; 


  var countMatch = function(element){
   if(!hashTable[element]){
     hashTable[element] = 1;
   }
   else{
     hashTable[element] += 1;
     matchCount+=1;   
   }
  };
  

  arr1.map(function(element, index){
   countMatch(element);
   countMatch(arr2[index]);
  });
  
  return matchCount === arr1.length;
  
}
