// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr = [1,3,5,7,9]
// The minimum sum is 1 + 3 + 5 + 7 = 13  and the maximum sum is 3 + 5 + 7 + 9 = 24 . The function prints :
// 16 24

function miniMaxSum(arr) {
    arr.sort((a,b) => a - b)
    console.log(
        (arr.reduce((pv, cv) => pv + cv)) - arr[arr.length - 1], 
        (arr.reduce((pv, cv) => pv + cv)) - arr[0])
}


// take 2:

function minMaxSum(arr) {
    let sum = arr.reduce((pv, cv) => pv + cv);
    console.log(sum - Math.max(...arr), sum - Math.min(...arr))

}