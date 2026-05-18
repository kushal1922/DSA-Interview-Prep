function SecondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(SecondLargest([1, 6, 3, 5, 7]));
