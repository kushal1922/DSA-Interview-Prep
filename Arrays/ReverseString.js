function ReverseString(arr) {
  let right = arr.length - 1;
  let left = 0;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
console.log(ReverseString("h", "e", "l", "l", "o"));
