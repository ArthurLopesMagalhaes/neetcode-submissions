class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1)
        }

        const sortedArray = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);

        const result = [];
        for (let i = 0; i < k; i++) {
            result.push(sortedArray[i][0]);
        }

        return result;
    }
}
