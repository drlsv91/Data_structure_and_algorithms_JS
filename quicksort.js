// const quickSort = function(arr, start = 0, end = arr.length - 1) {
//   // debugger;
//   if (start >= end) return;
//   let pivotPoint = partition(arr, start, end);
//   quickSort(arr, start, pivotPoint - 1);
//   quickSort(arr, pivotPoint + 1, end);
//   return arr;
// };
// function partition(arr, startIndex, endIndex) {
//   var pivot = arr[endIndex];
//   var pivotLoc = startIndex;
//   for (let i = startIndex; i < endIndex; i++) {
//     if (arr[i] < pivot) {
//       swap(arr, i, pivotLoc);
//       pivotLoc++;
//     }
//   }
//   swap(arr, pivotLoc, endIndex);

//   return pivotLoc;
// }

// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   return arr;
// }
function quickSort(nums) {
  debugger;
  if (nums.length <= 1) return nums;

  let pivot = nums[nums.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([12, 34, 1, 4]));
