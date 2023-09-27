/* 
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

function majorityElement (nums) {
    nums.sort(function(a, b){return a-b});

    return nums[Math.ceil(nums.length - 1/2)];
}

/* 
I accidentally saw the awnsers on the discussion while trying to take out a doubt. Anyways, I don't really like to use the sort function because I don't know how the sort was made, therefore I don't know it's time and space complexity.
*/