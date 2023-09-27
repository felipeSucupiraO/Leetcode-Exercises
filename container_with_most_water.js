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