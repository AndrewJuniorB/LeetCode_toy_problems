/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var output = 0;
    for (let i = 0; i < nums.length; i ++ ) {
        if (nums[i] != val) {
            nums[output++] = nums[i];
        }
    }
    return output;
};