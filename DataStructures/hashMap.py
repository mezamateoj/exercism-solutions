class MyHashMap:

    def __init__(self):
        self.newHashMap = {}

    # inserts a (key, value) pair into the HashMap
    def put(self, key: int, value: int) -> None:
        if key in self.newHashMap:
            self.newHashMap[key] = value

        self.newHashMap[key] = value

    # value to which the specified key is mapped,
    # or -1 if this map contains no mapping for the key
    def get(self, key: int) -> int:
        if key not in self.newHashMap:
            return -1
        return self.newHashMap[key]

    def remove(self, key: int) -> None:
        if key in self.newHashMap:
            del self.newHashMap[key]


# Your MyHashMap object will be instantiated and called as such:
key, value = 1, 'hi'
key2, value2 = 2, 'hi2'
obj = MyHashMap()
obj.put(key, value)
print(obj.get(key))
print(obj.get(key2))
obj.remove(key)
print(obj.get(key))


# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
