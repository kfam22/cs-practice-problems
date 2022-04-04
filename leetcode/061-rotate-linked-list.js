// Given the head of a linked list, rotate the list to the right by k places.

var rotateRight = function(head, k) {
    if(!k || !head || !head.next) return head;
    let length = 1;
    let tail = head
    // find the length of the list and set the tail to the last element
    while(tail.next){
        length++;
        tail = tail.next
    }
    // link the tail to the head creating a circular list
    tail.next = head;
    // find the remainder of number of times to rotate (if k length is 10 and k is 20 nothing will change.)
    k %= length;
    //rotate 
    for(let i = 0; i < length - k; i++){
        tail = tail.next;
    }
    // set the head and change back to non-circular list
    head = tail.next;
    tail.next = null;
    return head
};