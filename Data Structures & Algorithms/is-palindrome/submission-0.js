class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
        const reverse = str.split('').reverse().join('')
        return str === reverse
    }
}
