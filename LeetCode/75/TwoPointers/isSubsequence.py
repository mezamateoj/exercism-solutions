# https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i, j = 0, 0
        while (i < len(s) and j < len(t)):
            if s[i] == t[j]:
                i += 1
            j += 1
        return i == len(s)
 

s1 = "abc" 
t1 = "ahbgdc"

s = "axc"
t = "ahbgdc"
test = Solution()
print(test.isSubsequence(s1, t1))
print(test.isSubsequence(s, t))