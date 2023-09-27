/* 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

function maxArea (height) {
    var left = 0;
    var right = height.length - 1;
    var maxArea = 0;

    while (left < right) {
        let lower;
        if (height[left] < height[right])
            lower = left;
        else
            lower = right;

        if (height[lower] * (right - left) > maxArea) {
            maxArea = height[lower] * (right - left);
            continue;
        }

        if (height[left] < height[right])
            left++;
        else
            right--;
    }

    return maxArea;
}

/* 
I wrote this code in less than 30 min, and I don't know what I was doing (it was fully automatic). The time complexity of this algorithm is O(n), which is excelent, since the direct approach takes O(n^2). It was terrible in memory, but it seems like the space complexity is O(1), so I can't understand why.
*/