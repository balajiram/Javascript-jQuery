
var COLOR = { RED: 0, BLACK:1}

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
 if(!root || !root.data){
   root = new Node(data);
   root.color = COLOR.BLACK;
   return root;
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
		  return root;
		}
	}
	fixTree(newNode);
 }
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
  
  var uncle = null;
  
	  
	  while(node.parent.color === COLOR.RED){
		 if(node.parent.parent && node.parent === node.parent.parent.left){
		   uncle = getUncle(node,'right');
			 if(uncle && uncle.color === COLOR.RED){
				node.parent.color = COLOR.BLACK;
				uncle.color = COLOR.BLACK;
				node.parent.parent.color = COLOR.RED;
				node = node.parent.parent;
				continue;
			 }
			 if(node === node.parent.left){
			   node = node.parent;
			   rightRotate(node);
			 }
			 else if(node === node.parent.right){
				 leftRotate(node);
			 }
			 
		 }
		 else{
			 node.parent.color = COLOR.BLACK:
		 }
	  }
  
  
}


function rightRotate(node){
	
 var parentNode = node.parent;
 
 parentNode.left = node.right ;
 node.parent = parentNode.parent;
 
 parentNode.parent = node;
 node.right = parentNode;
 
 if(node.data < node.parent.data){
	 node.parent.left = node;
 }
 else if(node.data > node.parent.data){
	 node.parent.right = node;
 }
}

function leftRotate(node){

 var parentNode = node.parent;
 var grandParent = parentNode.parent;

node.parent.right = node.left;
var temp = node.parent.parent;

node.parent.parent = node;
node.parent = temp;
}
