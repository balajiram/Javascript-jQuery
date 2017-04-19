/**
* Generate linkedlist for each level of binary tree 
*/
function height(node){
  if(node){
    if(node.left && node.right){
     return 1+Math.max(height(node.left), height(node.right));
    }
    else if(node.left){
     return 1+ height(node.left);
    }
    else if(node.right){
     return 1+ height(node.right);
    }
    else{
     return 1;
    }
  }
  else{
   return 0;
  }
  
  return 0;
}

function LinkedList(){
 this.head = null;
 this.end = null;
}

LinkedList.prototype.insert = function(data){
 if(this.head){
  this.end.next = new Item(data);
  this.end = this.end.next;  
 }
 else{
  this.head = new Item(data);
  this.end = this.head;
 }
}

function Item(data){
 this.data = data;
 this.next = null;
}

function generateLinkListofEachLevel(tree){
   var arrList = [];
  for(var i=1,len=height(tree); i<=len;i++){
    var list = new LinkedList();
    copyNodeFromLevel(tree,i,list);
	arrList.push(list);
  }
  return arrList;
}


function copyNodeFromLevel(root, level, list){
  console.log("*");
  if(level == 1){
   list.insert(root.data);
  }
  else{
   copyNodeFromLevel(root.left,level-1,list);
   copyNodeFromLevel(root.right,level-1,list);
  }
}
