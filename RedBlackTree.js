
var COLOR = { RED: 'red', BLACK:'black'};

function Node(data){
 this.data = data;
 this.color = COLOR.RED;
 this.left = null;
 this.right = null;
 this.parent = null;
}

function RedBlackTree(){
 this.root = null;
}


function insert(root, data){
	console.log("insert");
 if(!root || !root.data){
   root = new Node(data);
   root.color = COLOR.BLACK;
 }
 else{
    var current = root;
	var newNode = new Node(data);
    while(true){
		if(data<current.data){
		  if(!current.left){
		   current.left = newNode;
		   newNode.parent = current;
		   break;
		  }
		  else{
		   current = current.left;
		  }
		}
		else if(data > current.data){
		  if(!current.right){
		    current.right = newNode;
			newNode.parent = current;
			break;
		  }
		  else{
		   current = current.right;
		  }
		}
		else{
		}
	}
	var node = fixTree(newNode);
	if(!node.parent){
		node.color = COLOR.BLACK;
		root = node;
	}
 }
 return root;
}


function getUncle(node, from){
  
 if(from === 'right' && node && node.parent && node.parent.parent && node.parent.parent.right){
    return node.parent.parent.right;
 }
 else if(from === 'left' && node && node.parent && node.parent.parent && node.parent.parent.left){
    return node.parent.parent.left;
 }
 else{
   return  null;	    
 }
}

function fixTree(node){
  console.log('fixTree');
  
	  while(node && node.parent && node.parent.color === COLOR.RED){
		  var uncle = null;
		 if(node.parent.parent && node.parent === node.parent.parent.left){
		   uncle = getUncle(node,'right');
			 if(uncle && uncle.color === COLOR.RED){
				node.parent.color = COLOR.BLACK;
				uncle.color = COLOR.BLACK;
				node.parent.parent.color = COLOR.RED;
				node = node.parent.parent;
				continue;
			 }
			 if(node === node.parent.right){
				 
				 leftRotate(node);
				 node.color = COLOR.BLACK;
				 node.parent.color = COLOR.RED;
				 rightRotate(node);
				 			 
							 
			}
			else if(node === node.parent.left){
			   node = node.parent;
			   
			   node.color = COLOR.BLACK;
			   node.parent.color = COLOR.RED;
			   rightRotate(node);
			 }
			 
			 
		 }
		 else if(node.parent.parent && node.parent === node.parent.parent.right){
			 uncle = getUncle(node,'left');
			 
			 if(uncle && uncle.color === COLOR.RED){
				 uncle.color = COLOR.BLACK;
				 node.parent.color = COLOR.BLACK;
				 node.parent.parent.color = COLOR.RED;
				 node = node.parent.parent;
				 continue;
			 }
			 if(node === node.parent.left){
				 rightRotate(node);
				 node.color = COLOR.BLACK;
				 node.parent.color = COLOR.RED;
				 leftRotate(node);
			 }
			 else if(node === node.parent.right){
				 node = node.parent;
				 node.color = COLOR.BLACK;
				 node.parent.color = COLOR.RED;
				 leftRotate(node);
			 }
		 }
	  }
  
  return node;
}


function rightRotate(node){
	
 var parentNode = node.parent;
 
 parentNode.left = node.right ;
 node.parent = parentNode.parent;
 
 parentNode.parent = node;
 node.right = parentNode;
 if(node.parent){
	 if(node.data < node.parent.data){
		 node.parent.left = node;
	 }
	 else if(node.data > node.parent.data){
		 node.parent.right = node;
	 }
 }
}

function leftRotate(node){
 var parentNode = node.parent;
 
 parentNode.right = node.left;
 if(parentNode.right){
	 parentNode.right.parent = parentNode;
 }
 node.parent = parentNode.parent;
 parentNode.parent = node;
 
 node.left = parentNode;
 if(node.parent){
	 if(node.parent.data< node.data){
		 node.parent.right = node;
	 }
	 else{
		 node.parent.left = node;
	 }
 }
}
