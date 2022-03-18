// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permute = function(nums, perms = [], permList = []) {
    
    //     recursion base case
        if(nums.length === 0){
            permList.push([...perms])
        }
        
        for(let i = 0; i < nums.length; i++){
            perms.push(nums[i]);
            const options = nums.filter((num, idx) => idx !== i);
            permute(options, perms, permList)
            perms.pop()
        }
        return permList
    };
    
    
    // [1,2,3]
    
    //  _ _ _
     
    //  1 _ _ [2,3]
    //  1,2 _ [3]
    //  1,3 _ [2]
     
    //  2 _ _ [1,3]
    //  2,1,3
    //  2,3,1
    
    //  3 _ _ [1,2]
    //  3,1,2
    //  3,2,1