function maxProductOfThree(inputs) {
    let productsOfThree, productsOfTwo, max, min,
        size = inputs.length, itr=2;
    
    if(size <3)
        throw new Error('Inadequate input data');
    else{
      productsOfTwo = inputs[0]*inputs[1],
      productsOfThree = productsOfTwo * inputs[2];
        
      min = Math.min(inputs[0],inputs[1]);
      max = Math.max(inputs[0],inputs[1]);
      
        
      while(itr<size){
        let current = inputs[itr],
          //product which may greater than productsOfTwo  
          possibleProduct = Math.max(
                                    [current*max,
                                    current*min]);
          
          productsOfThree = Math.max(
                                  [productsOfThree,
                                  productsOfTwo*current]);
                                  
          if(possibleProduct > productsOfTwo){
              productsOfTwo = possibleProduct;
          }
          if(current<min){
             min = current;
          }
          else if(current>max){ 
             max = current;
          }
        itr+=1;
      }
        
      return productsOfThree  
    }
}

console.log(maxProductOfThree([-10, -70, 7, 3, 2]));
