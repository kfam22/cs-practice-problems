// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// My solution
// test case:
const nums = [1,3,5,6]
const target = 5

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(nums[mid] === target) return mid;
        else if(nums[mid] > target) end--;
        else start ++
    }
    return start;
};