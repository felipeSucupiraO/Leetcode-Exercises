/* 
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

function rotate(nums, k) {
    var j = 0;
    // the j value keeps track of the index of the element that is being exchanged
    var future = null;
    var currentOverriden = null;
    var value = nums[0];

    for (var i = 0; i < nums.length; i++) {
        // future is the index where we must put the current analized value
        future = k + j;
        if (future > nums.length - 1)
            future = (future % nums.length);

        // the currentOverriden variable keeps the value that will be overriden now, to then asign it to the value that will be used next
        currentOverriden = nums[future];
        nums[future] = value;
        value = currentOverriden;

        if (Math.floor(i % (nums.length / k)) == 0) {
            // if the lenght is even, we must jump one value in each rotation so that we can correctly cycle through all the values
            j = future + 1;
            value = nums[j];
        } else {
            j = future;
        }
    }

    return nums;
}