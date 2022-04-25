// leetcode 350 Intersection of two arrays II
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

var intersect = function(nums1, nums2) {
    
    nums1 = nums1.sort((a,b) => a - b);
    nums2 = nums2.sort((a,b) => a - b);
    let answer = [];
    
    
    while(nums1.length && nums2.length){
        if(nums1[0] === nums2[0]){
            answer.unshift(nums1.shift());
            nums2.shift();
        }
        else if(nums1[0] > nums2[0]) {
            nums2.shift();
        }
        else{
            nums1.shift();
        }
    }
    
    return answer;
};

// test cases
// [1,2,2,1]
// [2,2]
// expect: [2,2]