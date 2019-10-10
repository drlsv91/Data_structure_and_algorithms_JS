// function selectionSort(arr) {
//   arr.forEach((elem, index) => {
//     minValue = elem;
//     minIndex = index;
//     for (let i = index; i < arr.length; i++) {
//       if (compare(arr[i], minValue) < 0) {
//         minValue = arr[i];
//         minIndex = i;
//       }
//     }
//     arr = swap(arr, index, minIndex);
//   });
//   return arr;
// }
// const compare = function(a, b) {
//   if (a < b) return -1;

//   if (a > b) return 0;
//   return 0;
// };

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   return arr;
// }

var selectionSort = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[lowest]) {
        lowest = k;
      }
    }
    if (i !== lowest) {
      [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
    }
  }
  return arr;
};
console.log(selectionSort([1, 6, 8, 2, 5]));
