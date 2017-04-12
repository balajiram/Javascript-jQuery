function Node(data){
	this.data = data;
	this.parent = null;
	this.left = null;
	this.right = null;
}

Node.prototype.insertLeft = function(data){
   //checking node has data
   if(this.data === null)
     return null;
   else{
	this.left = new Node(data);
    this.left.parent = this;	
   }
   
   return this.left;
}

Node.prototype.insertRight = function(data){
  if(this.data === null)
    return null;
  else{
    this.right = new Node(data);
	this.right.parent = this;
  }
  return this.right;
}

function BinaryTree(data){
	this.root = new Node(data);
}

BinaryTree.prototype.getNode = function(data){
	
	var find = function(root){
		while(root){
			if(root.data === data)
				return root;
			var left = find(root.left);
			var right = find(root.right);
			
			return left ? left: right;
		}
		return null;
	}
	
	
	if(!this.root || !this.root.data)
		return null;
	else{
		return find(this.root);
	}
	return null;
}

function depth(root,data){
  
  if(!root || !root.data){
    return null; 
  }
  else if(root.data === data){
   return 1;
  }
  else{
   var l= depth(root.left,data);
   var r = depth(root.right,data);
   
   if(l && r){
     return (l<=r) ? (r+1):(l+1);
   }
   else if(l){
    return l+1;
   }
   else if(r){
    return r+1;
   }
   else{
    return null;
   }
   
  } 
}

function LeastCommonAncestor(tree, data1, data2){
	
	var node1 = tree.getNode(data1);
	var node2 = tree.getNode(data2);
	
	var moveUp = function(node,level){
		while(level){
			node = node.parent;
			level--;
		}
		return node;
	}
	
	if(!tree || !tree.root)
		return
	else{
		var depth1 = depth(tree.root,data1);
		var depth2 = depth(tree.root,data2);
		
		diff = depth1-depth2;
		console.log(diff);
		if(diff<0){
			node2 = moveUp(node2,-diff);
		}
		else{
			node1 = moveUp(node1,diff);
		}
		
		while(node1 && node2){
			if(node1 === node2)
				return node1;
			node1 = node1.parent;
			node2 = node2.parent;
		}
		
		return null;
	}
}




var tree = new BinaryTree(20);
tree.root.insertRight(22);
var node = tree.root.insertLeft(8);
node.insertLeft(4);
node= node.insertRight(12);
node.insertLeft(10);
node.insertRight(14);
