function MoveZeroes(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      let temp = arr[i];
      arr[i] = arr[x];
      arr[x] = temp;
      x++;
    }
  }
  return arr;
}
console.log(MoveZeroes([0, 3, 5, 0, 1, 2, 0]));
