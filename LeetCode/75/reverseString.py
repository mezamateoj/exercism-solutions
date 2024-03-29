# https://leetcode.com/problems/reverse-string/

from typing import List


class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        i, j = 0, len(s) - 1  # use two pointers
        print(i, j)
        while(i < j):
            s[i], s[j] = s[j], s[i]
            i += 1
            j -= 1
        return s  # return just in here to check not in actual leetcode problem
        

test = Solution()
print(test.reverseString(["h","e","l","l","o"]))
    