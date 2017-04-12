function Node(data) {
this.data = data;
this.left = null;
this.right = null;
}

function BinarySearchTree() {
this.root = null;
}

BinarySearchTree.prototype.add = function(data){
	if(!this.root){
		this.root = new Node(data);
	}
	else{
		var currentNode = this.root;
		var newNode = new Node(data);
		
		while(currentNode){
			if(data < currentNode.data){
				if(!currentNode.left){
					currentNode.left = newNode;
					break;
				}
				else{
					currentNode = currentNode.left;
				}
			}
			else{
				if(!currentNode.right){
					currentNode.right = newNode;
					break;
				}
				else{
					currentNode = currentNode.right;
				}
			}
		}
	}

}

function height(root){
	if(!root)
		return 0;
	else{
		var leftHeight = height(root.left);
		var rightHeight = height(root.right);
		
		if(leftHeight>rightHeight)
			return leftHeight+1;
		else
			return rightHeight+1;		
	}
}

function Inorder(node){
	
	if(!node || !node.data)
		return null;
	else{
		Inorder(node.left);
		console.log(node.data);
		Inorder(node.right);
	}
}

function Preorder(node){
	if(!node || !node.data){
		return null;
	}
	else{
		console.log(node.data);
		Preorder(node.left);
		Preorder(node.right);
	}
}

function Postorder(node){
	if(!node || !node.data){
		return null;
	}
	else{
		Postorder(node.left);
		Postorder(node.right);
		console.log(node.data);
	}
}

function printLevelOrder(tree){
	if(!tree)
		return null;
	console.log('*');
	var h = height(tree.root);
	for(var i=1;i<=h;i++){
		printGivenLevel(tree.root,i);
	}
}

function printGivenLevel(root,height){
	if(!root){
		return null;
	}
	else if(height === 1){
		console.log(root.data);
	}
	else{
		printGivenLevel(root.left,height-1);
		printGivenLevel(root.right,height-1);
	}
}


var binarySearchTree = new BinarySearchTree();
binarySearchTree.add(5);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(2);
binarySearchTree.add(4);
binarySearchTree.add(4);
binarySearchTree.add(6);
binarySearchTree.add(8);
