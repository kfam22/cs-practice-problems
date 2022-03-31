// Description

// Given a list, return length of the list--i,e, the number of nodes in the list.

// You do not need to uncomment the ListNode code in the header. That's just there for your reference.

// Note the the tests will show the linked lists as if they are arrays. This is just the visual representation; under the hood, it's a linked list with those values.

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head) {
    let count = 0;
    while(head) {
        count++;
        head = head.next;
    }
    return count;
}