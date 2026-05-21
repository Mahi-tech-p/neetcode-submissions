class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}

        for(let i =0; i<nums.length ;i++){
            let camp = target -nums[i];
            if(map[camp] !== undefined){
                return [map[camp],i]
            }
            map[nums[i]] = i
        }
    }
}
