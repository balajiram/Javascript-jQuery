function BinaryTree(data){
 this.root = new Node(data);
}

function Node(data){
 this.data = data;
 this.left = null;
 this.right = null;
}


Node.prototype.insertLeft = function(data){
  this.left = new Node(data);
  return this.left;
}

Node.prototype.insertRight = function(data){
 this.right = new Node(data);
 return this.right;
}

Node.prototype.height = function(data){
  if(this.left && this.right){
    return 1+Math.max(this.left.height(),this.right.height());
  }
  else if(this.left){
   return 1+ this.left.height();
  }
  else if(this.right){
   return 1+ this.right.height();
  }
  else{
   return 1;
  }
}


function printLevelOrder(node){
  if(node){
    var height = node.height()
	for(var i=1;i<=height;i++){
	  printGivenLevel(node,i);
	}
  }
  return null;  
}

function printGivenLevel(tree,level){
 if(!tree){
  return null;
 }
 else if(level === 1){
  console.log(tree.data);
 }
 else{
  printGivenLevel(tree.left,level-1);
  printGivenLevel(tree.right,level-1);
 }
}
