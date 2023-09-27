function removeDuplicates (nums) {
    var currNumber = nums[0];
    var result = 1;
    
    for (i = 1 ; i < nums.length ; ) {
        if (nums[i] == currNumber) {
            nums.splice(i, 1);
        }
        else
        {
            currNumber = nums[i];
            result++;
            i++;
        }
    }

    return result;
}