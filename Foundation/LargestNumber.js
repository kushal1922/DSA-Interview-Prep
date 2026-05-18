function LargestNum(arr){
 let largest = -Infinity
 for(let i=0;i<arr.length;i++){
  if(arr[i]>largest){
    largest=arr[i]
  }
 }
 return largest
}
console.log(LargestNum([2,5,6,11,32,1,3]));
