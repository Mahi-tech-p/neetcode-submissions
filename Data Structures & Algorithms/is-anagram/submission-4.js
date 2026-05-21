class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        let counter = {};

        for (let char of s) {
            if (counter[char]) {
                counter[char]++;
            } else {
                counter[char] = 1;
            }
        }

        for(let char of t){
          if(!counter[char]){
            return false
          }
          counter[char]--;
        }
        return true
    }
    
}
