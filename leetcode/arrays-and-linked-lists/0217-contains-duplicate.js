// leetcode 217 Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// my solution
var containsDuplicate = function(nums) {
    let map = {};
    
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]) return true;
        else map[nums[i]] = 1;
    }
    return false;
};

// solution using new Set
function setSolution(nums) {
  let testSet = new Set(nums);
  return testSet.size !== nums.length;
}

// leetcode discussion
// A lot of the posted Javascript solutions here use a one-line expression using Sets, which is certainly an elegant way of solving the problem. But I was a bit surprised that they were, according to LeetCode, faster than my solution, which uses Objects (a hash table, essentially). One immediate advantage of using Objects is that you can return early if you detect a duplicate, whereas with Sets, you have to convert the entire array to a Set before you can decide if there are duplicates.

// So with a little bit of testing, it turns out that for small arrays, using Sets is faster. For larger arrays, even if there are no duplicates and you have to go through the entire array, using Objects becomes significantly faster. For me, the crossover point happens at arrays of about 10,000 elements.