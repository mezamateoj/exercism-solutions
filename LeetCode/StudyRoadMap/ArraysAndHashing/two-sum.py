from typing import List


class Solution:
    def bruteForce(self, nums: List[int], target: int) -> List[int]:
        n = 0
        while n < len(nums):
            pointer = nums[n]
            for i in range(n+1, len(nums)):
                if pointer + nums[i] == target:
                    return [n, i]
            n += 1

    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # create a hash map
        hashPrev = {}  # val: index
        for i, n in enumerate(nums):
            # Ex. n: 3, i:0
            print(hashPrev)
            diff = target - n
            if diff in hashPrev:
                return [hashPrev[diff], i]
            hashPrev[n] = i


test = Solution()
print(test.twoSum([3, 2, 4], 6))
