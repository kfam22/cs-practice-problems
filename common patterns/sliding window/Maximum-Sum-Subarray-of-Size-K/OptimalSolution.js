// If you observe closely, you will realize that to calculate the sum of a contiguous subarray, we can utilize the sum of the previous subarray. For this, consider each subarray as a Sliding Window of size ‘k.’ To calculate the sum of the next subarray, we need to slide the window ahead by one element. So to slide the window forward and calculate the sum of the new position of the sliding window, we need to do two things:

// Subtract the element going out of the sliding window, i.e., subtract the first element of the window.
// Add the new element getting included in the sliding window, i.e., the element coming right after the end of the window.
// This approach will save us from re-calculating the sum of the overlapping part of the sliding window


function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
      windowSum = 0,
      windowStart = 0;
  
    for (window_end = 0; window_end < arr.length; window_end++) {
      windowSum += arr[window_end]; // add the next element
      // slide the window, no need to slide if we've not hit the window size of 'k'
      if (window_end >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[windowStart]; // subtract the element going out
        windowStart += 1; // slide the window ahead
      }
    }
    return maxSum;
  }
  
  
  console.log(`Maximum sum of a subarray of size K: ` 
                 + max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]));
  console.log(`Maximum sum of a subarray of size K: ` 
                 + max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));

// time complexity: O(n)
// space complexity: O(1)