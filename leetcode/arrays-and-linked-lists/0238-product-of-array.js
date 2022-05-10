https://leetcode.com/problems/product-of-array-except-self/

// #238

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

var productExceptSelf = function(nums) {
    let answer = [];
    
    for(let i = 0; i < nums.length; i++){
        let copy = [...nums]
        copy.splice(i,1)
        answer.push(copy.reduce((pv, cv) => pv * cv))
    }
    return answer;
};