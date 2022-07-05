// This problem follows the Binary Tree Path Sum pattern. We can follow the same DFS approach. There will be two differences:

// Every time we find a root-to-leaf path, we will store it in a list.
// We will traverse all paths and will not stop processing after finding the first path.

var pathSum = function(root, targetSum) {
    if(!root) return [];
    let paths = [];
    const dfs = (node, sum, slate) => {
        if(!node.left && !node.right) {
            if(node.val === sum) {
                slate.push(node.val);
                paths.push(slate.slice());
                slate.pop();
            }
        }
        if(node.left) {
            slate.push(node.val);
            dfs(node.left, sum - node.val, slate);
            slate.pop();
        }
        if(node.right) {
            slate.push(node.val);
            dfs(node.right, sum - node.val, slate);
            slate.pop();
        }
    }
    dfs(root, targetSum, []);
    return paths;
};