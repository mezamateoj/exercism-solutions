// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    let m = word1.split('').length
    let n = word2.split('').length
    let i = 0
    let j = 0
    let results = ''

    while(i < m || j < n) {
        if (i < m) {
            results += (word1[i])
            i++
        }
        if (j < n) {
            results += (word2[j])
            j++
        }
    }
    return results
    
};

let word1 = "abc";
let word2 = "pqr"

console.log(mergeAlternately(word1, word2)) // apbqcr