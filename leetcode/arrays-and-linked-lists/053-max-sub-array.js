// https://leetcode.com/problems/maximum-subarray/

// #53 maximum subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

var maxSubArray = function(nums) {
    let currentSA = nums[0]
    let maxSA = nums[0]
    
    for(let i = 1; i < nums.length; i++){
        if(currentSA + nums[i] < nums[i]){
            currentSA = nums[i];
        }else {
            currentSA += nums[i];
        }
        maxSA = Math.max(maxSA, currentSA);
    }
    return maxSA;
};

