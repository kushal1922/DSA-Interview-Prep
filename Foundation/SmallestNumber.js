function SmallestNum(arr){
 let smallest = Infinity;
 for(let i=0;i<arr.length;i++){
   if(arr[i]<smallest){
     smallest=arr[i]
   }
 }
 return smallest;
}
console.log(SmallestNum([3,6,8,2,-1,-42,1,5,7]));
