function LinkedList(){
	this.head = null;
}


function Node(data){
	this.data = data;
	this.next = null;
}

LinkedList.prototype.push = function(data){
	
	if(!this.head){
		this.head = new Node(data);
	}
	else {//iterating to the end
		var current = this.head;
		while(current && current.next){
			current = current.next;
		}
		current.next = new Node(data);
	}
}

LinkedList.prototype.print = function(){
	var current = this.head;
	while(current){
		console.log(current.data);
		current = current.next;
	}
}

function Merge(list1, list2){
	debugger;
	console.log("Inside the merged list");
	
	var mergedList = new LinkedList();
	var leftPtr = list1.head;
	var rightPtr = list2.head;
	
	/**
	*@desc: method to copy the node data and move the point to next location
	*@return: next refernce 
	*/
	var cloneAndMove = function(node){
		mergedList.push(node.data);
		return node.next;
	}
	
	while(leftPtr && rightPtr){
		if(leftPtr.data < rightPtr.data){
			leftPtr = cloneAndMove(leftPtr);
		}
		else{
			rightPtr = cloneAndMove(rightPtr);
		}
	}
	while(leftPtr){
		leftPtr = cloneAndMove(leftPtr);
	}
	while(rightPtr){
		rightPtr = cloneAndMove(rightPtr);
	}
	
	return mergedList;
}

function MergeSort(list) {
	
	var partitionList = function(list){
		
		var slowPtr,fastPtr;
		
		//empty linked list/list with one element
		if(!list || !list.head){
			return {left: null, right: null};
		}
		
		slowPtr = list.head;
		fastPtr = list.head;
		
		var leftList = new LinkedList();
		var rightList = new LinkedList();
		
		while(fastPtr.next){
			if(fastPtr.next && fastPtr.next.next){
				 //copying the data
			    leftList.push(slowPtr.data);
			   
				fastPtr = fastPtr.next.next;
				slowPtr = slowPtr.next;
			}
			else{
				//copying the data
			    leftList.push(slowPtr.data);
				slowPtr = slowPtr.next;
				fastPtr = fastPtr.next;
			}
		}
		
		while(slowPtr){
			rightList.push(slowPtr.data);
			slowPtr = slowPtr.next;
		}
		
		return response ={ left: leftList, right: rightList };
	}
	
    //empty list/ list with one node already sorted
	if(!list && !list.head && !list.head.next){
		return list;
	}
	else {
		
		var leftList = null, rightList = null;
		
		var partition = partitionList(list);
		
		leftList = partition.left;
		rightList = partition.right;
		
		if(leftList && leftList.head.next){
		  leftList = MergeSort(leftList);
		}
		
		if(rightList && rightList.head.next){
			rightList = MergeSort(rightList);
		}
	    
		return Merge(leftList, rightList);
	}
	
}
