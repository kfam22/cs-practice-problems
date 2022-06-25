// This problem follows the Binary Tree Level Order Traversal pattern. We can follow the same BFS approach. The only difference will be, instead of keeping track of all the nodes in a level, we will only track the depth of the tree. As soon as we find our first leaf node, that level will represent the minimum depth of the tree.


var minDepth = function(root) {
    if(!root) return 0;

    let queue = [root],
        depth = 0;

        while(queue.length) {
            let len = queue.length;

            while(len--) {
                let node = queue.shift();
                if(!node.left && !node.right) {
                    depth++;
                    return depth;
                } else {
                    if(node.left) queue.push(node.left);
                    if(node.right) queue.push(node.right);
                }
                len--;
            }
            depth++;
        }
    
};