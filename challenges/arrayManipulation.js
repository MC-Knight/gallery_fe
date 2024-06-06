function hasSubarrayWithSum(items, targetSum) {
  let left = 0; // left pointer to track the start of the subarray
  let sum = 0; // sum of the current subarray

  for (let right = 0; right < items.length; right++) {
    sum += items[right]; // add the current element to the sum

    while (sum > targetSum) {
      // if the sum exceeds the target sum
      sum -= items[left]; // remove the element at the left pointer from the sum
      left++; // move the left pointer to the right
    }

    if (sum === targetSum) {
      // if the sum is equal to the target sum
      return true; // return true
    }
  }

  return false; // return false if no subarray with the target sum is found
}
