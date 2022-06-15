// A basic brute force solution will be to calculate the sum of all ‘k’ sized subarrays of the given array to find the subarray with the highest sum. We can start from every index of the given array and add the next ‘k’ elements to find the subarray’s sum. 


function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
      windowSum = 0;
  
    for (i = 0; i < arr.length - k + 1; i++) {
      windowSum = 0;
      for (j = i; j < i + k; j++) {
        windowSum += arr[j];
      }
      maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
  }
  
  
  console.log(`Maximum sum of a subarray of size K: 
      ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
  console.log(`Maximum sum of a subarray of size K: 
      ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);


    //   The above algorithm’s time complexity will be O(N∗K), where ‘N’ is the total number of elements in the given array.