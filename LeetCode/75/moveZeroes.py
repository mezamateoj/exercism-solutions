# https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = 0
        for j in range(len(nums)):
            if nums[j] != 0:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
        
        return nums

test = Solution()
print(test.moveZeroes([0,1,0,3,12]))
        