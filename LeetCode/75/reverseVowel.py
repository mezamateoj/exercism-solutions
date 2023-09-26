# https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = 'aeiouAEIOU'
        i, j = 0, (len(s) - 1)  # two pointers
        s= list(s) 
        while( i < j):
            if s[i] in vowels and s[j] in vowels:
                # make swap
                s[i], s[j] = s[j], s[i]
                i += 1
                j -= 1
            if s[i] not in vowels:
                i += 1
            if s[j] not in vowels:
                j -= 1

        return ''.join(s)

test = Solution()
print(test.reverseVowels('hello'))