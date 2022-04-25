// Leetcode 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    let map = {};
    
    for(let i = 0; i < nums.length; i++){
        if(!map[nums[i]]) map[nums[i]] = 1;
        else map[nums[i]]++;
    }
    
    for(let key in map){
        if(map[key] === 1) return key;
    }
};

// test cases

// [2,2,1]
// expect 1;