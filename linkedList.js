var fn=(function(){

return {

Node: function(data){
 return { data: data, next: null }
},
createLinkList(list){
 var linkList, node;
  list.forEach(function(item, index){
		if(node) {
		 node.next = this.Node(item);
		 node = node.next;
		}
		else {
		 linkList = this.Node(item);
		 node = linkList;
		}
	}, this);  

return linkList;
},

printList: function(list){
 while(list !== null){
  console.log(list.data);
  list = list.next;
 }
},

removeDuplicate: function(list){
 var staticRef = list;
  
  while(staticRef !== null){

   var movingRef = staticRef ;
   while(movingRef !== null){
     if(movingRef.next && movingRef.next.data === staticRef.data){
      movingRef.next = movingRef.next.next;
     }
     movingRef = movingRef.next;
   }
  staticRef = staticRef.next;
  }
 return list;
},

listPartition(list, startRef, backRef){

  if(startRef == backRef){
    return {
       headRef: startRef,
       backRef: backRef,
       list: list 
    };
  }
  var slowRef = startRef;
  var fastRef = startRef;

   while(fastRef !== backRef){
    if(fastRef.next && fastRef.next.next){
       fastRef = fastRef.next.next;
       slowRef = slowRef.next;
    }
    else if(fase){}
    else{
     fastRef = null;
    }
   }
   return {
    headRef: list,
    backRef: slowRef,
    list: list 
   };
},

mergeSort: function(list,start,end){


while(start !== end){
   var response = this.listPartition(list,start,end);
   
   start = headRef;
   end = backRef;

  this.mergeSort(list,end.next,end
}

console.log(response);
 return response;
}
}
})();


var list = fn.createLinkList([6,4,21,6,21]);

fn.mergeSort(list,list,null);

