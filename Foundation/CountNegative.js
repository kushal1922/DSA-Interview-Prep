function CountNegative(arr){
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
      count++
    }
  }
  return count;
}
console.log(CountNegative([5,7,8,-1,-2,1,5]));
