// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// 153. Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let min = nums[0];
    
    while(left < right){
        if(nums[left] < nums[right]){
            min = Math.min(min, nums[left])
            return min
        }
        let mid = Math.floor((left + right) / 2);
        min = nums[mid]
        if(nums[mid] >= nums[left]) left = mid + 1;
        else right = mid - 1;
        min = Math.min(min, nums[left])
    }
    return min;
};



// use binary search
// if the mid is greater than or equal to the left
// search left side
// if not, search right side

// [4,5,6,7,0,1,2]
// [5,6,7,0,1,2,4]
//  l     m     r