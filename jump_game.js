/* 
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

function canJump (nums) {
    currDistance = 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= currDistance)
            currDistance = 1;
        else
            currDistance++;
    }

    if (currDistance == 1)
        return true;
    else
        return false;
}

/* 
Funny because I thought of a situation that this solution could not solve, and yet it solved. Anyway, it have a time complexity of O(n) and a space complexity of O(n), with constant auxiliar space.
*/

