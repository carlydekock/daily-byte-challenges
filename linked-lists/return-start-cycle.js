//Return Start of Cycle
//Given a potentially cyclical linked list where each value is unique, return the node at which the cycle starts. If the list does not contain a cycle, return null.
//Ex- 1->2->3, return null
//Ex- 1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
//Ex- 1->9->3->7->7 (7 points to itself), return a reference to the node containing 7

function ListNode(val, next){
  this.val = val;
  this.next = next ? next : null;
}

function LinkedList(){
  this.head = null;
}

function startOfCycle(head){
  let fastPointer = head;
  let slowPointer = head;

  while(fastPointer !== null && fastPointer.next !== null){
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;

    if(fastPointer === slowPointer){
      break;
    }
  }

  if(fastPointer === null || fastPointer.next === null){
    return null;
  }

  slowPointer = head;
  while(slowPointer !== fastPointer){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  return slowPointer;
}

//Testing
let list = new LinkedList();
list.head = new ListNode(1);
list.head.next = new ListNode(2);
list.head.next.next = new ListNode(3);
list.head.next.next.next = new ListNode(4);
list.head.next.next.next.next = new ListNode(5, list.head.next);

console.log(startOfCycle(list.head));