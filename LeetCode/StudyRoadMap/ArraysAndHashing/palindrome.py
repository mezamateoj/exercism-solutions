"""
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing 
all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include 
letters and numbers.
"""


class Solution:
    # first cheating solution
    def isPalindromeCheat(self, s: str) -> bool:
        newString = ''
        # remove non alpha numeric from string and lower its letter
        for c in s:
            # check if it's alphanumeric
            if c.isalnum():
                # if true add it to new string but lower case
                newString += c.lower()
        # true if reverse new string == normal new string
        return newString == newString[::-1]

    def isPalindrome(self, s: str) -> bool:
        # create two pointer
        l, r = 0, len(s) - 1

        # loop while left pointer has not meet right pointer
        while l < r:
            # make sure both chars are alpha numeric
            while l < r and not self.isAlphaNum(s[l]):
                l += 1
            while r > l and not self.isAlphaNum(s[r]):
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l, r = l + 1, r - 1
        return True

    # helper func to check is alphanumeric
    def isAlphaNum(self, c: str) -> bool:
        return (
            ord('A') <= ord(c) <= ord('Z') or
            ord('a') <= ord(c) <= ord('z') or
            ord('0') <= ord(c) <= ord('9')
        )


test = Solution()
print(test.isPalindrome('A man, a plan, a canal: Panama'))
