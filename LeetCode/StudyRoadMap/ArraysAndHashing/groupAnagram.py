from typing import List
from collections import defaultdict


# (m * n) time complexity, m = len(strs), n = len(strs[i])
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)

        for i in strs:
            count = [0] * 26  # a...z

            for char in i:
                count[ord(char) - ord('a')] += 1

            res[tuple(count)].append(i)
        return res.values()


test = Solution()
print(test.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
