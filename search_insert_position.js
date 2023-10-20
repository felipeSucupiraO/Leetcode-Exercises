function binarySearch(nums, target) {
    var min = 0;
    var max = nums.length;
    var media; 
    while (max >= min) {
        media = (max - min) / 2;
        if (nums[media] == target) {
            return media;
        }
        else if (nums[media] > target) {
            min = media;
        }
        else {
            max = media;
        }
    }

    return media;
}