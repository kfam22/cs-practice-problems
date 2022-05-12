// https://leetcode.com/problems/maximum-product-subarray/
// 152 maximum product subarray
// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

var maxProduct = function(nums) {
    let max = Math.max(...nums);
    let minSA = 1;
    let maxSA = 1;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            minSA = 1;
            maxSA = 1;
        } else {
            let temp = nums[i] * maxSA
            maxSA = Math.max(nums[i] * maxSA, nums[i] * minSA, nums[i])
            minSA = Math.min(temp, nums[i] * minSA, nums[i])
            max = Math.max(max, maxSA, minSA)
        }
    }
    return max;
};
