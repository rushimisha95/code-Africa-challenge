function hasSubarrayWithTargetSum(arr, target) {
  let currentSum = 0; // Initialize currentSum to store the sum of the current subarray
  let start = 0; // Initialize start to point to the starting index of the current subarray

  // Iterate through the array with end pointing to the ending index of the current subarray
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end]; // Add the current element to currentSum

    // While currentSum is greater than the target and start is less than or equal to end
    while (currentSum > target && start <= end) {
      currentSum -= arr[start]; // Subtract the element at start from currentSum
      start++; // Increment start to shrink the window from the left
    }

    // If currentSum equals the target, return true
    if (currentSum === target) {
      return true;
    }
  }

  // If no subarray with the target sum is found, return false
  return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5]; // Input array
const target = 17; // Target sum
console.log(hasSubarrayWithTargetSum(arr, target)); // Output: true
