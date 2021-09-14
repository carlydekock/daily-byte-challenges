//Reverse List
//Given a linked list, containing unique values, reverse it, and return the result.
//Ex: 1->2->3->null, return a reference to the node that contains 3 which points to a list that looks like the following: 3->2->1->null

class ListNode{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
}

function reverseList(head){
  let previous = null;
  let current = head;
  let following = head;

  while(current !== null){
    following = following.next;
    current.next = previous;
    previous = current;
    current = following;
  }
  return previous;
}

//Testing
let list = new LinkedList();
list.head = new ListNode(1);
list.head.next = new ListNode(2);
list.head.next.next = new ListNode(3);
list.head.next.next.next = new ListNode(4);

console.log(reverseList(list.head));