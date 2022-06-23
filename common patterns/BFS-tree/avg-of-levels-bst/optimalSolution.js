// This problem follows the Binary Tree Level Order Traversal pattern. We can follow the same BFS approach. The only difference will be that instead of keeping track of all nodes of a level, we will only track the running sum of the values of all nodes in each level. In the end, we will append the average of the current level to the result array.

// time complexity: O(n)
// space complexity: O(n)

var averageOfLevels = function(root) {
    const queue = [root],
          result = [];
    
    while(queue.length) {
        let len = queue.length,
            level = 0;
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            level += node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(level / len);
    }
    return result;
};