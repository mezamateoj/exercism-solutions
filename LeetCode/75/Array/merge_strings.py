# https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        m, n = len(word1), len(word2)
        r, l = 0, 0
        result = ''
        while(r < m or l < n):
            if r < m:
                result += word1[r]
                r += 1
            if l < n:
                result += word2[l]
                l += 1
        return result 

            



test = Solution()
print(test.mergeAlternately('abc', 'pqr'))