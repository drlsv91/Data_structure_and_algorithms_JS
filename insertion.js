// function insertionSort(arr) {
//  for(let i=1; i<arr.length; i++){
//     var value = arr[i]
//     var compareIndex = i-1
//     while(compareIndex > -1 && compare(arr[compareIndex], value) > 0){

//     }
//  }
// }

// const compare = function(a, b){
//     if(a < b) return -1
//     else if(a >b) return 1
//     else return 0
// }
const insertionSort = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

console.log(insertionSort([3, 6, 12, 2, 1]));
