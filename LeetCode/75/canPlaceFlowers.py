from typing import List

# 0(n) solution
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        newFlowerBed = [0] + flowerbed + [0]
        for i in range(1, len(newFlowerBed) - 1):
            # if current position is 0 and the adjacent positions (if any) are also 0 , plant flower and decrease n
            if newFlowerBed[i] == 0 and (newFlowerBed[i - 1] == 0) and (newFlowerBed[i + 1] == 0):
                newFlowerBed[i] = 1  # plant the flower
                n -= 1
        if n > 0:
            return False
        return True


test = Solution()
print(test.canPlaceFlowers([1,0,0,0,1], 1))
