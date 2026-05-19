class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let str of strs){
            let k = str.split('').sort().join('')
            if(!map.has(k)){
                map.set(k,[])
            }
            map.get(k).push(str)
        }
        return Array.from(map.values())
    }
}
