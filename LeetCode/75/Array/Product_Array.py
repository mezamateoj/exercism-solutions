# https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75
# without using the division operation.
from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = [1] * len(nums)

        prefix = 1
        for i in range(len(nums)):
            result[i] = prefix  # [1, 1, 1, 1] => result[0] = 1 => prefix
            prefix *= nums[i]  # 1 * 1

        postfix = 1
        for i in range(len(nums) - 1, -1, -1):
            result[i] *= postfix
            postfix *= nums[i]  # 1 * 4
        return result
    
    
    def productExceptSelfCheat(self, nums: List[int]) -> List[int]:
        mult = nums[0]
        for i in range(1, len(nums)):
            mult *= nums[i]
        return [int(mult / x) for x in nums]
    

        
test = Solution()
print(test.productExceptSelf([1, 2, 3, 4]))
# print(test.productExceptSelfCheat([1,2,3,4]))


        
        