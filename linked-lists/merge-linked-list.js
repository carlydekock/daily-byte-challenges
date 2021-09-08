//Merge Linked Lists
//Given two sorted linked lists, merge them together in ascending order and return a reference to the merged list
//Ex: list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
//Ex: list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
//Ex: list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null

function ListNode(val, next){
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function mergeTwoLists(l1, l2){
  let newList = new ListNode();
  let head = newList;

  //while we aren't at the end of at least one list yet
  while(l1 !== null && l2 !== null){
    if(l1.val < l2.val){
      newList.next = new ListNode(l1.val, null);
      l1 = l1.next;
    } else {
      newList.next = new ListNode(l2.val, null);
      l2 = l2.next;
    }
    newList = newList.next;
  }

  if(l1 !== null){
    newList.next = l1;
  }
  if(l2 !== null){
    newList.next = l2;
  }

  return head.next;
}

