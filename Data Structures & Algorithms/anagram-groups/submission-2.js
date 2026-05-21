class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for(let word of strs){
            let sortedWord = word.split('').sort().join('');
            if(!map[sortedWord]){
                map[sortedWord] = []
            }
            map[sortedWord].push(word)
        }
        return Object.values(map)
    }
}
