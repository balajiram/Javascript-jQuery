function Node(data){
 this.data = data;
 this.height = 1;
 this.left = null;
 this.right = null;
}

function AVLTree(){
 this.root = null;
}

function height(root){
  if(!root)
   return 0;
   
 return root.height;
}

function getBalance(node){
 return (height(node.left)-height(node.right));
}

function calculateHeight(node){
	return (1 + Math.max(height(node.left), height(node.right)));
}

function leftRotate(node){
  x = node.right;
  t1 = x.left;
  
  node.right = t1;
  x.left = node;
  
   node.height = calculateHeight(node);
   x.height = calculateHeight(x);
   
   return x; 
}

function rightRotate(node){
  x = node.left;
  t1= node.right;
 
  node.left = t1;
  x.right = node;
  
  node.height = calculateHeight(node);
  x.height = calculateHeight(x);
  return x;
}

function insert(root,data){
  if(!root || !root.data){
    root = new Node(data);
	return root;
  }
  else{
    if(data < root.data){
	 root.left = insert(root.left,data);
	}
	else if(data > root.data){
	 root.right = insert(root.right,data);
	}
	else{// no dupllicates
	 return root
	}
  }
  
   root.height = calculateHeight(root);
   
   var balance = getBalance(root);
   
   if(balance > 1 && data< root.left.data){
    root = rightRotate(root);
   }
   else if( balance > 1 && data >root.left.data){
    root.left = leftRotate(root.left);
	root = rightRotate(root);
   }
   else if(balance < 1 && data > root.right.data){
    root = leftRotate(root);
   }
   else if(balance < 1 && data < root.right.data){
    root.right = rightRotate(root.right);
    root = leftRotate(root);
   }
   
   return root; 	
}
