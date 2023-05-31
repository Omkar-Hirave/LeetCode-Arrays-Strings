function findDuplicates(nums){
    let duplicates = []
    for(let i = 0 ; i < nums.length ; i++){
        let index = Math.abs(nums[i] - 1 )
        if(nums[index] < 0){
            duplicates.push(Math.abs(nums[i]))
        }
        nums[index] = nums[index] * -1
    }
    return duplicates
}
