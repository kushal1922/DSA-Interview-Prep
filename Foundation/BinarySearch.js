function BinarySearch(arr,target){
 let left = 0 , right = arr.length -1;

 while(right>=left){
  let middle = Math.floor((right+left)/2)
   if(arr[middle]===target){
    return middle
   }else if (target > arr[middle]){
     left = middle+1
   }else{
     right = middle-1
   }
 }


}
console.log(BinarySearch([2,6,1,5,7],6));
