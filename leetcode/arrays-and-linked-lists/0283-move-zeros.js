// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
    
    let zeroCount = 0;
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === 0){
            nums.splice(i,1)
            zeroCount++;
        }
    }
    while(zeroCount){
        nums.push(0);
        zeroCount--;
    }
};

// test case:
// [0,1,0,3,12]
// expected: [1,3,12,0,0]