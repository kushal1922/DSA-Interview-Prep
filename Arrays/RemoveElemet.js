// function RemoveElement(arr, val) {
//   let x = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != val) {
//       arr[x] = arr[i];
//       x++;
//     }
//   }
//   return x;
// }
// console.log(RemoveElement([3, 5, 3, 7, 1, 3], 3));

var missingNumber = function (arr) {
  let sum = 0;
  let n = arr.length;
  let totalSum = Math.floor((n * (n + 1)) / 2);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return totalSum - sum;
};
console.log(missingNumber([0, 3, 1]));
