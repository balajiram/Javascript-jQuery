/**
* sort the single link list using mergesort
*
*/

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
	
	var mergedList = new LinkedList();
	var leftList = list1.head;
	var rightList = list2.head;
	
	/**
	*@desc: method to copy the node data and move the point to next location
	*/
	var clone(node){
		mergedList.push(node.data);
		node = node.next;
	}
	
	while(leftList && rightList){
		if(leftList.data < rightList.data){
			clone(leftList);
		}
		else{
			clone(rightList);
		}
	}
	while(leftList){
		clone(leftList);
	}
	while(rightList){
		clone(rightList);
	}
	
	return mergedList;
}

function MergeSort(list) {
	
	var partitionList = function(list){
		
		var slowPtr,fastPtr;
		//empty linked list
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
