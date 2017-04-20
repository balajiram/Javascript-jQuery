function getSubSet(arr){
  
  var hashTable ={};
  
  for(var i=0;i<arr.length;i++){
    generatesubset(arr[i],i+1,hashTable);
  }
  
  var response = [];
  for(key in hashTable){
   response = response.concat(hashTable[key]);
  }
  
  return response;
}




function generatesubset(element,position,hashTable){
 if(position === 1){
   hashTable[position] = [element];
 }
 else{
   while(position >0){
     if(position === 1){
	  hashTable[position].push(element);
	  return;
	 }
     
     var prevSet = hashTable[position-1];
	 
	 newSet = prevSet.map(function(d){
	   return d.concat(element);
	 });
	 if(hashTable[position]){
	   hashTable[position] = hashTable[position].concat(newSet);
	 }
	 else{
	  hashTable[position] = newSet;
	 }
	 position = position-1;
   }
 }
}
