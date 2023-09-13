# this is O(n)
def basicN(n):
    for i in range(n):
        print(i)


# this is 0(n + n) => O(2n) => O(n)
def basic2n(n):
    for i in range(n):
        print(i)
    for j in range(n):
        print(j)


# this is 0(n * n) => O(n*2) => O(n^2): less efficient from a time complexity standpoint
def basicSquare(n):
    for i in range(n):
        for j in range(n):
            print(i, j)


# this is O(n*2) + O(n) => O(n^2 + n): we drop the less significant term (n) => O(n^2)
def basicSquareN(n):
    for i in range(n):
        for j in range(n):
            print(i, j)

    for l in range(n):
        print(l)


# this is 0(1) => constant time complexity, no matter how big n is, it will always take the same amount of time
def optimal(n):
    return n + n


# this is O(a + b) , can't simplify it further
def basicTwo(a, b):
    for i in range(a):
        print(i)

    for l in range(b):
        print(l)
