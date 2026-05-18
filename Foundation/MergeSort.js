function MergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));
  return Merge(left, right);
}

function Merge(left, right) {
  let res = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}

console.log(Merge([3, 1, 2, 0], [4, 7, 6, 9]));
console.log(MergeSort([3, 1, 2, 0, 4, 7, 6, 9]));
