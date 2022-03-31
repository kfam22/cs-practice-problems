// Description

// Insert a new value at the head of a linked list.

// You have to wrap the value n into a ListNode() object.

// JavaScript:

// const new_node = new ListNode(n);

// Python:

// new_node = ListNode(n)

// You do not need to uncomment the ListNode code in the header. That's just there for your reference.

// Note the the tests will show the linked lists as if they are arrays. This is just the visual representation; under the hood, it's a linked list with those values.

// Return a reference to the new head of the list.


// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(n, a) {
    const newNode = new ListNode(n);
    newNode.next = a;
    return newNode;
}
