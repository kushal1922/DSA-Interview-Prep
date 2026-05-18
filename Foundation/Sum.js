function Sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let res = Sum([2, 6, 4, 8, 9]);
console.log(res);
