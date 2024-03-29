//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
var loopDown = function(n) {
  var result = [];
  while (n >= 0) {
    result.push(n);
    n--;
  }
  return result;
};
console.log("loopDown while loop", loopDown(5));
// 2. Next, try looping just like above except using recursion
var loopDown = function(n) {
  var result = [];
  var helper = function(num) {
    if (num < 0) return;
    result.push(num);
    return helper(num - 1);
  };
  helper(n);
  return result;
};
console.log("recursive loopDown", loopDown(5));

// loopDown(5)
// 3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
var exponent = function(base, expo) {
  var total = [];
  while (expo > 0) {
    total.push(base);

    expo--;
  }
  return total;
};
console.log("while loop exponent", exponent(5, 3));
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
var recursiveExpo = function(base, expo) {
  var res = [];
  var helper = function(base, expo) {
    if (expo <= 0) return;
    res.push(base);

    return helper(base, expo - 1);
  };

  helper(base, expo);
  return res;
};
console.log("recursion exponent", recursiveExpo(5, 3));
// recursiveExpo(5,3)
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
var recursiveMultiplier = function(arr, num) {
  var result = [];

  if (arr.length === 0) return arr;
  var poped = arr.shift();
  result.push(poped * num);
  return result.concat(recursiveMultiplier(arr, num));
};
console.log("recursiveMultiplier", recursiveMultiplier([2, 7, 9, 5], 2));

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
var recursiveReverse = function(arr) {
  var reversed = [];
  if (arr.length === 0) return arr;
  var poped = arr.pop();
  reversed.push(poped);
  return reversed.concat(recursiveReverse(arr));
};
console.log(
  "recursive reverse: ",
  recursiveReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

/*
Implement factorial.
factorial(5) => 5*4*3*2*1 => 120
*/
var factorial = function(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
console.log("factorial", factorial(5));
/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...
What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/
var fibonnaci = function(n) {
  if (n === 1 || n === 0) return n;
  return fibonnaci(n - 1) + fibonnaci(n - 2);
};
console.log(fibonnaci(8));
/*
Implement a function that flattens a nested array.
flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

var flattens = function(arr) {
  var res = [];
  arr.forEach(element => {
    if (!Array.isArray(element)) {
      res.push(element);
    } else {
      res = res.concat(flattens(element));
    }
  });
  return res;
};
console.log(flattens([1, [2], [3, [[4]]]]));
/*
Write a function that takes two numbers and returns the greatest common divisor.
*/
// var gcd = function(num1, num2) {
//   var min = Math.min(num1, num2);
//   var max = Math.max(num1, num2);
//   if (max % min === 0) {
//     return min;
//   } else {
//     return gcd(min, max % min);
//   }
// };

var gcd = function(num1, num2) {
  if (num1 === num2) return num1;
  else if (num1 > num2) return gcd(num1 - num2, num2);
  else return gcd(num1, num2 - num1);
};
console.log(gcd(12, 18));
/*
Implement a function that takes in a two-dimensional array of colors that represents a screen, a point in the array, and a color. The function will change the original color of the point to the new color and will fill the surrounding area with the original color in the same fashion.
*/

/*
Version 1:
Given the size of a grid (X rows and Y columns), write a function that returns the number of possible paths one can take starting at the top left of the grid and ending at the bottom right, assuming you can only move to the right and down.
Version 2:
Now, imagine that the you can move up, down, left, or right but cannot visit a spot that has already been visited. How many unique paths can the you take?
Hint: it may be useful to create a grid class and use it to keep track of the state as the you traverses the grid. What useful methods can you put on your grid class? Can you write an implementation that only uses a single grid?
*/
