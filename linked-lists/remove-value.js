//Remove Value
//Given a linked list and a value, remove all nodes containing the provided value, and return the resulting list.
//Ex: 1->2->3->null, value = 3, return 1->2->null
//Ex: 8->1->1->4->12->null, value = 1, return 8->4->12->null
//Ex: 7->12->2->9->null, value = 7, return 12->2->9->null

//Create dummy node
//dummy.next = head
//prev = dummy
//current = head
//Traverse list, check if current.val === val
//  If it does, delete and move current = current.next
//  If it doesn't, move current = current.next
//Return dummy.next;

function ListNode(val, next){
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

function removeValues(head, val){
  const dummy = new ListNode(null);
  dummy.next = head;
  let prev = dummy;
  let current = head;

  while(current !== null){
    if(current.val === val){
      let temp = current.next;
      prev.next = temp;
      current = temp;
    } else {
      current = current.next;
      prev = prev.next;
    }
  }

  return dummy.next;
}

