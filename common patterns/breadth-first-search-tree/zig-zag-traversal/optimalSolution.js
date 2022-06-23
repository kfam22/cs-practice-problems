// This problem follows the Binary Tree Level Order Traversal pattern. We can follow the same BFS approach. The only additional step we have to keep in mind is to alternate the level order traversal, which means that for every other level, we will traverse similar to Reverse Level Order Traversal.

// time complexity: O(n)
// space complexity: O(n)

var zigzagLevelOrder = function(root) {
    if(!root) return [];
    
    const queue = [root];
    const result = [];
    let count = 0;
    
    while(queue.length) {
        let len = queue.length;
        if(count % 2 === 0) result.push(queue.map(node => node.val));
        else result.push(queue.map(node => node.val).reverse());
        count++;
        
        while(len--) {
            const node = queue.shift();
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return result;
};
