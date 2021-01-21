/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let numIndexes = {};
  for (let i = 0; i < numbers.length; i++) {
    const complementIndex = numIndexes[target - numbers[i]];
    if (complementIndex != undefined) {
      return [i, complementIndex];
    }
    numIndexes[numbers[i]] = i;
  }
};
