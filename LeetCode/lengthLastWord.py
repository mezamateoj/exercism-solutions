# https://leetcode.com/problems/length-of-last-word/

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        newStr = s.split(' ')
        arr = []
        # remove non alpha numeric from array
        for letter in newStr:
            if letter.isalnum():
                arr.append(letter)
        return len(arr[-1])


test = Solution()
print(test.lengthOfLastWord('   fly me   to   the moon  '))
