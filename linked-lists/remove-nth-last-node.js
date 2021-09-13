//Remove Nth to Last Node
//Given a linked list and a value n, remove the nth to last node and return the resulting list.
//Ex: 1->2->3->null, n = 1, return 1->2->null
//Ex: 1->2->3->null, n = 2, return 1->3->null
//Ex: 1->2->3->null, n = 3, return 2->3->null

//Starting at head - traverse the list until fastPointer is n-1 away from the head
//Then, continue traversing both pointers until the fastPointer gets to the end
//Remove the slowPointer.next node (n-1 will be right before the node to be removed)
function ListNode(val, next){
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}


function removeNthFromEnd(head, n){
  const dummy = new ListNode(null);
  dummy.next = head;
  let leftPointer = dummy;
  let rightPointer = dummy;

  for(let i = 0; i <= n; i++){
    rightPointer = rightPointer.next;
  }

  while(rightPointer.next !== null){
    rightPointer = rightPointer.next;
    leftPointer = leftPointer.next;
  }

  const temp = leftPointer.next.next;
  leftPointer.next = temp;
  return dummy.next;
}