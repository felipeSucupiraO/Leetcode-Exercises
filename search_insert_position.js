/* 
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
*/

function binarySearch(nums, target) {
    var min = 0;
    var max = nums.length - 1;
    var media; 
    while (max >= min) {
        media = Math.floor((max + min) / 2);
        if (nums[media] == target) {
            return media;
        }
        else if (nums[media] > target) {
            max = media - 1;
        }
        else {
            min = media + 1;
        }
    }

    if (nums[media] > target) {
        return media;
    }
    else {
        return media + 1;
    }
}