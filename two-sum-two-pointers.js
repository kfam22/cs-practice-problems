// Given an array and a target(integer) return two elements of the array whose sum is equal to the target

// below is a brute force method, it's time complexity is O(n^2) or quadratic, this means that worst case, it
// must loop through each element in the entire array before finding the solution which is not efficient
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


// below is a more efficient method using two pointers


let twoSumTwoPointers = (array, target) => {
    // initializing i and j to point at the first and last elements respectively
    let i = 0;
    let j = array.length - 1
  
    // Continue looping until our base condition is met
    while(array[i] + array[j] !== target){
      // Increment i (i.e. increase array[i]'s value) if the sum is less than the target
      if(array[i] + array[j] < target){ i++ }
      // Decrement j (i.e. decrease array[j]'s value) if the sum is greater than the target
      if(array[i] + array[j] > target){ j-- }
      // Returning false if i >= j (i.e. no solution possible w/given parameters)
      if(i >= j) return false;
    }
    
    // This code will be reached only when our base condition is satisfied
    return [i, j]
  }