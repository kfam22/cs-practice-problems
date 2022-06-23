// This problem follows the Binary Tree Level Order Traversal pattern. We can follow the same BFS approach. The only difference will be that instead of appending the current level at the end, we will append the current level at the beginning of the result list.

// time complexity: O(n)
// space complexity: O(n)

var levelOrderBottom = function(root) {
    if(!root) return [];
    
    const queue = [root];
    const result = [];
    while(queue.length) {
        let len = queue.length;
        result.unshift(queue.map(node => node.val));
        
        while(len--) {
            const node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
};