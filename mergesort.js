// const mergeSort = function(arr) {
//   if (arr.length <= 1) return arr;
//   var half = Math.floor(arr.length / 2);
//   var leftHalf = arr.slice(0, half);
//   var rightHalf = arr.slice(half);
//   var leftSorted = mergeSort(leftHalf);
//   var rightSorted = mergeSort(rightHalf);
//   return merge(leftSorted, rightSorted);
// };

// const merge = function(left, right) {
//   var result = [],
//     iLeft = 0,
//     iRight = 0;
//   while (result.length < left.length + right.length) {
//     if (iLeft === left.length) result = result.concat(right.slice(iRight));
//     else if (iRight === right.length) result = result.concat(left.slice(iLeft));
//     else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);
//     else result.push(right[iRight++]);
//   }
//   return result;
// };

function mergeSort(nums) {
  if (nums.length === 1) return nums;
  let half = Math.floor(nums.length / 2);
  let leftHalf = nums.slice(0, half);
  let rightHalf = nums.slice(half);
  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  var result = [],
    iLeft = 0,
    iRight = 0;
  while (result.length < left.length + right.length) {
    if (iLeft === left.length) result = result.concat(right.slice(iRight));
    else if (iRight === right.length) result = result.concat(left.slice(iLeft));
    else if (left[iLeft] < right[iRight]) result.push(left[iLeft++]);
    else result.push(right[iRight++]);
  }
  return result;
}

console.log(mergeSort([34, 83, 10, 9, 1, 4]));
