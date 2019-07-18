// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
//find the one that is missing from the array.

function missingNumber(nums) {
  let numbers = [];

  let maxNumber = Math.max(...nums) || 10;
  let minNumber = Math.min(...nums) || 0;
  let missing_number = 0;

  //sorting the given numbers array
  let sortedArr = nums.sort();

  for (let i = minNumber; i <= maxNumber; i++) {
    numbers.push(i);
  }

  for (let n of numbers) {
    if (!sortedArr.includes(n)) {
      missing_number = n;

      return missing_number;
    }
  }

  if (nums.length === 1) {
    return 0;
  }
}

module.exports = missingNumber;
