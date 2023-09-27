function majorityElement (nums) {
    nums.sort(function(a, b){return a-b});

    return nums[Math.ceil(nums.length - 1/2)];
}