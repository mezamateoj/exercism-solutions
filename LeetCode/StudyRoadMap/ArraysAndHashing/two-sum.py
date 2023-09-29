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
    
    def threeSum(self, nums: List[int], target: int) -> List[int]:
        new_hash = {}
        for i in nums:
            new_hash[i] = 1
        i, j = 0, len(nums) - 1
        while i < j:
            s = nums[i] + nums[j]
            diff = target - s
            if nums[i] != diff and nums[j] != diff and diff in new_hash:
                return len([nums[i], nums[j], diff]) == 3
            else:
                if s  > target:
                    j -= 1
                elif s == target:
                    if nums[i + 1] + nums[j] < target:
                        i += 1
                    else:
                        j -= 1
                else:
                    i += 1
        return False

        


test = Solution()
# print(test.twoSum([3, 2, 4], 6))
print(test.threeSum([3, 7, 1, 2, 8, 4, 5], 12))
print(test.threeSum([3, 7, 1, 2, 8, 4, 5], 21))

