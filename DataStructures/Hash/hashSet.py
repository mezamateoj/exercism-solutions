# The hash set is one of the implementations of a set which is a data structure to store no repeated values

class MyHashSet:

    def __init__(self):
        self.newHash = set()

    def add(self, key: int) -> None:
        if key not in self.newHash:
            self.newHash.add(key)

    def remove(self, key: int) -> None:
        if key in self.newHash:
            self.newHash.remove(key)

    def contains(self, key: int) -> bool:
        return key in self.newHash


# Your MyHashSet object will be instantiated and called as such:
key = 3
key2 = 5
obj = MyHashSet()
obj.add(key)
print(obj)
obj.remove(key)
param_3 = obj.contains(key)
print(param_3)
