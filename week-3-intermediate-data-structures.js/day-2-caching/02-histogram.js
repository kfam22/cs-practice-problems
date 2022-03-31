// Description

// Produce a histogram of word frequency in a string.
// The function should return an array of strings, where each string takes the form
// word: ####
// word is the word in question, followed by a colon and a space, followed by a number of hash marks that corresponds to the number of times that word appears in the input string
// The result array should be sorted alphabetically. This can be done by calling .sort() of the array before returning it.
// If the input string is empty, return an empty array.

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
