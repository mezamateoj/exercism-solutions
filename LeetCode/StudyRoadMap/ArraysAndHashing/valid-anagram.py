class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        # create two hash containing the count of letters in str
        countS, countT = {}, {}
        # since both str are same length
        for i in range(len(s)):
            # if the key doesnt exist in the hashmap default value 0
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)

        print(countS)
        print(countT)
        # iterate the hash maps
        for c in countS:
            if countS[c] != countT.get(c, 0):
                return False
        return True

    def isAnagramSort(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)


test = Solution()
print(test.isAnagram('anagram', 'nagaram'))
print(test.isAnagramSort('anagram', 'nagaram'))
