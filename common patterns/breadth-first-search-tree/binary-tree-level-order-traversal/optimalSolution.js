// Since we need to traverse all nodes of each level before moving onto the next level, we can use the Breadth First Search (BFS) technique to solve this problem.

// We can use a Queue to efficiently traverse in BFS fashion. Here are the steps of our algorithm:

// Start by pushing the root node to the queue.
// Keep iterating until the queue is empty.
// In each iteration, first count the elements in the queue (let’s call it levelSize). We will have these many nodes in the current level.
// Next, remove levelSize nodes from the queue and push their value in an array to represent the current level.
// After removing each node from the queue, insert both of its children into the queue.
// If the queue is not empty, repeat from step 3 for the next level.

// time complexity: O(n)
// space complexity: O(n)

var levelOrder = function(root) {
    if(!root) return [];

    const queue = [root];
    const result = [];

    while(queue.length) {
        let len = queue.length;
        result.push(queue.map(node => node.val));

        while(len--) {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
    }
    return result;
}