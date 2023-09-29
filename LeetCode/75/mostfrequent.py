from typing import List


# The time complexity of the provided approach is O(n)
class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:
        new_hash = {}
        max_frequency = 0
        smallest_key = 0
        for number in nums:
            if number % 2 == 0:
                if number not in new_hash:
                    new_hash[number] = new_hash.get(number, 0) # .get allows you to specify a default value if the key does not exist.
                new_hash[number]+=1
                # Check if the current number's frequency is greater than the max frequency
                if new_hash[number] > max_frequency:
                    max_frequency = new_hash[number]
                    smallest_key = number
                elif new_hash[number] == max_frequency:
                    # If frequency is equal, update the smallest_key
                    smallest_key = min(smallest_key, number)

        return smallest_key if max_frequency > 0 else -1

    
test = Solution()
print(test.mostFrequentEven([8154,9139,8194,3346,5450,9190,133,8239,4606,8671,8412,6290]))
print(test.mostFrequentEven([0,1,2,2,4,4,1]))
print(test.mostFrequentEven([0,0, 0, 0]))