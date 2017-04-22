function getPosibilities(coins, sum, permutation){
 var faceValue = coins.pop();
 console.log('*');
 
 if(sum === 0){
  console.log(permutation.toString());
 }
 if(!faceValue){
  return '';
 }
 if(faceValue === 0){
   return new Error("no solution");
 }
 else{
   var maxCoins = Math.ceil(sum/faceValue);
   if(coins.length >0){
	   var posibilities = range(maxCoins);
	   posibilities.map(function(count){
	   if(!permutation){
	    permutation =[];
	   }
		permutation.push(faceValue+"*"+count);
		getPosibilities(coins, sum-(faceValue*count), permutation);
	   });
	}
	else{
		permutation.push(faceValue+"*"+maxCoins);
	    getPosibilities(coins, sum-(faceValue*maxCoins), permutation);	
	}
  }
}


function range(start, edge, step) {
  // If only one number was passed in make it the edge and 0 the start.
  if (arguments.length == 1) {
    edge = start;
    start = 1;
  }
 
  // Validate the edge and step numbers.
  edge = edge || 0;
  step = step || 1;
 
  // Create the array of numbers, stopping befor the edge.
  for (var ret = []; (edge - start) * step >=0; start += step) {
    ret.push(start);
  }
  return ret;
}
