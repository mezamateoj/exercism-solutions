# https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
class Solution:
    def reverseWords(self, s: str) -> str:
        s = [x.strip() for x in s.split(',')]
        print(s)
        i, j = 0, len(s) - 1
        while( i < j):
            s[i], s[j] = s[j], s[i]
            i += 1
            j -= 1
        return ' '.join(s)

test = Solution()
print(test.reverseWords('the sky is blue'))
        