class ListNode{
	Constructor(data){
	this.data = data;
	this.next = null;
	}
}

class Linkedlist {
	
	constuctor() {
	this.head = null;

	}
}
add(data){
	const newNode = new ListNode(data);
	if(this.head === null){
	this.head = newNode;
	return;
	}
}
let current = thid.head;
while (current.next !== null){
	current = current.next;	
}
current.next = newNode;

display(){
	let current = this.head;
	let output = "";
	while (current !== null){

	}
	document.getElementById("output").textContent = output;
	}
