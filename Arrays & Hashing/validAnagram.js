// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const wordS={}
    const wordT={}
    if(s.length !== t.length){
        return false
    }
    for(let i=0; i<s.length; i++){
        if(!wordS[s[i]]){
            wordS[s[i]]=1
        } else {
            wordS[s[i]]++
        }

        if(!wordT[t[i]]){
            wordT[t[i]]=1
        } else {
            wordT[t[i]]++
        }
    }

    for (let char in wordS) {
        if (wordS[char] !== wordT[char]) {
            return false;
        }
    }   

    return true
};