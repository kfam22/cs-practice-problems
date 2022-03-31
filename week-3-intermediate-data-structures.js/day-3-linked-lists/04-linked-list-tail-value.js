// Description

// Given a list, return the value of the tail node in the list.

// If the input list is empty, return -9999.

// You do not need to uncomment the ListNode code in the header. That's just there for your reference.

// Note the the tests will show the linked lists as if they are arrays. This is just the visual representation; under the hood, it's a linked list with those values.

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(a) {
    if(!a) return -9999;
    while(a.next){
        a = a.next 
    }
    return a.value;
}