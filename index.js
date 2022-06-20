var removeDuplicates = function(nums){
  if(!nums.length) return 0;
  let count = 0;
  for(let i = 1;i<nums.length;i++){
    if(nums[count] !== nums[i]){
      count ++;
      nums[count] = nums[i]
    }
  }

  return count+1;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))