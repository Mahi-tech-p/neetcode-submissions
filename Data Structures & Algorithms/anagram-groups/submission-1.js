class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}

        for(let word of strs){
            let sortedStr = word.split('').sort().join('')

            if(!map[sortedStr]){
                map[sortedStr] = []
            }
            map[sortedStr].push(word)

        }
        return Object.values(map)
    }

}
