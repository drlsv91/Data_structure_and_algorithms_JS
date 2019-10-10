const mergeSort = function(arr) {
  if (arr.length <= 1) return arr;
  var half = Math.floor(arr.length / 2);
  var left = arr.slice(0, half);
  var right = arr.slice(half);
  var leftHalf = mergeSort(left);
  var rightHalf = mergeSort(right);
  return merge(leftHalf, rightHalf);
};

const merge = function(left, right) {
  var result = [],
    iLeft = 0,
    iRight = 0;
  while (result.length < left.length + right.length) {
    if (iLeft === left.length) result = result.concat(right.slice(iRight));
    else if (iRight === right.length) result = result.concat(left.slice(iLeft));
    else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);
    else result.push(right[iRight++]);
  }
  return result;
};
console.log(mergeSort([4, 3, 17, 1, 0, 57, 33]));
