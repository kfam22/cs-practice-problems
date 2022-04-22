// 189. Rotate Array
// https://leetcode.com/problems/rotate-array/

Given an array, rotate the array to the right by k steps, where k is non-negative.




// fast solution
var rotate = function(nums, k) {
    return nums.unshift(...nums.splice(-k % nums.length));
 };
 
 // my solution
 var rotate = function(nums, k) {
     let rotateLen = nums.length - (k % nums.length)
     let shiftNums = nums.splice(rotateLen);
     
     for(let i = shiftNums.length - 1; i >= 0; i--){
         nums.unshift(shiftNums[i]);
     }
 };
 
 // figure out how many digits should be rotated; take into accunt the length of the array (example if the array length is 20 and k is 10, nothing will shift)
 // slice k elements from nums and save as variable (this variable will be an array)
 // unshift these elements into the beginning of the remaining array