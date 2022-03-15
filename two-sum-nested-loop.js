// Given an array and a target(integer) return two elements of the array whose sum is equal to the target

const a = [1, 2, 3, 4, 5];
const target = 9;

function twoSum(arr, target) {
    for(let i = 0; i < arr.length -1; i++) {
        for(let j = i +1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) return (i, j)
        }
    }
}

console.log(twoSum(a, target))