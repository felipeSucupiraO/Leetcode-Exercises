#include <math.h>

int binarySearch (int nums[], int target) {
    int length = sizeof(nums) / sizeof(nums[0]);
    
    int min = 0;
    int max = length - 1;
    int media;
    while (max >= min)
    {
        media = floor((min + max) / 2);
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

int main() {
    return 0;
}