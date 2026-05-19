class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const stack =[]
        const map = {
            ")":"(",
            "}":"{",
            "]":"["
        }
        for(let ch of s){
            if(map[ch]){
                if(stack.pop() !== map[ch]  ){
                    return false
                }
            }
            else{
            stack.push(ch)
            }
        }
                return stack.length === 0
    }

}
