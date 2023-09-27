function twoSum (numbers, target) {
    var small = 0;
    var big = numbers.length - 1;
    while (small < big) {
        if (numbers[small] + numbers[big] == target)
            return [small + 1, big + 1];
        else if (numbers[small] + numbers[big] < target) {
            small++;
            continue;
        }
        else if (numbers[small] + numbers[big] > target) {
            big--;
            continue;
        }
    }
}