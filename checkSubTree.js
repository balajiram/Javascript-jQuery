function Node(data){
 this.data = data;
 this.left =  null;
 this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.insert = function(data){
  if(!this.root){
   this.root = new Node(data);
  }
  else {
   current = this.root;
   
   while(current){
    if(data < current.data){
	 if(!current.left){
	  current.left = new Node(data);
	  return;
	 }
	 else{
	  current = current.left;
	 }
	}
	else if(data>current.data){
	 if(!current.right){
	  current.right = new Node(data);
	  return;
	 }
	 else{
	  current = current.right;
	 }
	}
	else{//duplicates
	 return ;
	}
   }
  } 
}



function height(node){
 if(!node){
   return 0;
 }
 else{
  return 1+Math.max(height(node.left), height(node.right));
 }
}



function checkSubTree(tree1, tree2){
  console.log("***");
  var h1 = height(tree1.root);
  var h2 = height(tree2.root);
  
  if(h1 > h2){
	 tree1 = getSubTree(tree1, tree2.root.data);    
  }
  else if(h2 > h1){
	 tree2 = getSubTree(tree2, tree1.root.data);
  }
  
  var h1 = height(tree1);
  var h2 = height(tree2);
  
  if(h1 === h2){
	for(var i=1;i<=h1;i++){
	  var list1 = getInorder(tree1.root, i);
	  var list2 = getInorder(tree2.root, i);
	  if(list1.toString() !== list2.toString()){
		return false;
	  }
	}
	return true;
  }
  return false;
}

function getSubTree(tree, data){
   if(!tree.root){
    return null;
   }
 
   var current = tree.root;
   
   while(current){
    if(data === current.data){
	  tree.root = current;
	  return tree;
	}
	else if(data < current.data){
	 current = current.left;
	}
	else if(data>current.data){
	 current = current.right;
	}
   }
   
   return null;
}



function getInorder(node, height){
  if(height === 1){
    if(!node){
	  return null;
	}
	else{
	  return node.data;
	}
  }
  var inOrderList =[];
  while(height >=1){
   height = height -1;
   inOrderList = inOrderList.concat(getInorder(node.left,height));
   inOrderList = inOrderList.concat(getInorder(node.right,height));
  }
  
  return inOrderList;
}

