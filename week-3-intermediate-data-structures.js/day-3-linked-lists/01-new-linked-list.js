// Description

// Given three values, return a new linked list containing those values.

// You have to wrap the values into ListNode() objects.

// JavaScript:

// const new_node = new ListNode(n);

// Python:

// new_node = ListNode(n)

// You do not need to uncomment the ListNode code in the header. That's just there for your reference.

// Note the the tests will show the linked lists as if they are arrays. This is just the visual representation; under the hood, it's a linked list with those values.

// Return a reference to the head of the new list.

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(a, b, c) {
    const aNode = new ListNode(a);
    const bNode = new ListNode(b);
    const cNode = new ListNode(c);
    aNode.next = bNode;
    bNode.next = cNode;
    return aNode;
}