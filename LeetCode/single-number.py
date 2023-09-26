from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        for i in range(1, len(nums)):
            nums[0] ^= nums[i] # If we take XOR of two same bits, it will return 0
        return nums[0]
            

        

        
        
test = Solution()
print(test.singleNumber([2, 2, 1]))