// As we are trying to search for a root-to-leaf path, we can use the Depth First Search (DFS) technique to solve this problem.

// To recursively traverse a binary tree in a DFS fashion, we can start from the root and at every step, make two recursive calls one for the left and one for the right child.

// Here are the steps for our Binary Tree Path Sum problem:

// Start DFS with the root of the tree.
// If the current node is not a leaf node, do two things:
// Subtract the value of the current node from the given number to get a new sum => S = S - node.value
// Make two recursive calls for both the children of the current node with the new number calculated in the previous step.
// At every step, see if the current node being visited is a leaf node and if its value is equal to the given number ‘S’. If both these conditions are true, we have found the required root-to-leaf path, therefore return true.
// If the current node is a leaf but its value is not equal to the given number ‘S’, return false.

// time complexity: O(n)

var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    
    let hasPath = false;
    
    const dfs = (node, sum) =>{
        if(!node.left && !node.right) {
            if(node.val === sum) {
                hasPath = true;
            }
            return;
        }
        if(node.left) dfs(node.left, sum - node.val);
        if(node.right) dfs(node.right, sum - node.val); 
    }
    
    dfs(root, targetSum);
    return hasPath;
};