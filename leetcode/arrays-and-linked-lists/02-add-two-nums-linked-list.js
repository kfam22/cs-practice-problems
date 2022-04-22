// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
    let intOne = [];
    let intTwo = [];
    
    while(l1){
        intOne.unshift(l1.val)
        l1 = l1.next
    }
    while(l2){
        intTwo.unshift(l2.val)
        l2 = l2.next
    }
    // intOne = Number(intOne.join(''))
    // intTwo = Number(intTwo.join(''))
    let sum = (BigInt(intOne.join('')) + BigInt(intTwo.join(''))).toString().split('').reverse().join('')
    let head = new ListNode(Number(sum[0]))
    let prev = head
    for(let i = 1; i < sum.length; i++){
        let newNode = new ListNode(Number(sum[i]))
        prev.next = newNode
        prev = newNode
    } 
    return head
};