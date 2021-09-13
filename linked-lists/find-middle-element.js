//Find Middle Element
//Given a non-empty linked list, return the middle node of the list. If the linked list contains an even number of elements, return the node closer to the end.
//Ex- 1->2->3->null, return 2
//Ex- 1->2->3->4->null, return 3
//Ex- 1->null, return 1

class ListNode{
  constructor(val, next){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }  
}

function findMiddle(head){
  let slowPointer = head;
  let fastPointer = head;

  while(fastPointer !== null && fastPointer.next !== null){
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer.val;
}

//Testing
let list = new LinkedList();
list.head = new ListNode(1);
list.head.next = new ListNode(2);
list.head.next.next = new ListNode(3);

console.log(findMiddle(list.head));
