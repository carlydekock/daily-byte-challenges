//Contains Cycle
//Given a linked list, containing unique numbers, return whether or not it has a cycle.
//Note: a cycle is a circular arrangement (i.e. one node points back to a previous node)
//Ex- 1->2->3->1 -> true (3 points back to 1)
//Ex- 1->2->3 -> false
//Ex- 1->1 true (1 points to itself)

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

function hasCycle(head){
  let fastPointer = head;
  let slowPointer = head;
  
  while(fastPointer !== null && fastPointer.next !== null){
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;

    if(fastPointer === slowPointer){
      return true;
    }
  }
  return false;
}

//Testing
let list = new LinkedList();
list.head = new ListNode(1, 2);
list.head.next = new ListNode(2, 3);
list.head.next.next = new ListNode(3, list.head);

console.log(hasCycle(list.head));