from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        newHash = set()

        for x in nums:
            if x in newHash:
                return True
            newHash.add(x)

        return False


solution = Solution()
print(solution.containsDuplicate([1, 2, 3, 1]))  # True
