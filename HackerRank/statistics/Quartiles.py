import numpy as np

#
# Complete the 'quartiles' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def quartiles(data):
    data.sort()
    length = len(data)
    
    def find_median(numbers):
        n = len(numbers)
        if n % 2 == 0:
            return (numbers[n // 2 - 1] + numbers[n // 2]) / 2
        else:
            return numbers[n // 2]
        
    q2 = find_median(data)
    lower_half = data[:length // 2] if length % 2 == 0 else data[:length // 2]
    upper_half = data[length // 2 + 1:] if length % 2 != 0 else data[length // 2:]
    
    q1 = find_median(lower_half)
    q3 = find_median(upper_half)

    lst = [q1, q2, q3]
    newLst = [int(i) for i in lst]
    
    return newLst

# same but using numpy 
# def quartiles(arr):
#     # Write your code here
#     arr = np.sort(np.array(arr))
#     # arr with odd number of elements
#     if len(arr) % 2 != 0:
#         q2 = np.median(arr)
#         q1 = np.quantile(arr, 0.25)
#         q3 = np.quantile(arr, 1)
        
#         return np.array([q1, q2, q3]).astype(int)
    
#     arr = np.array(arr)
#     first, second = np.split(arr, 2)
#     return np.array([np.mean(first), np.median(arr), np.mean(second)]).astype(int)


# arr1 = [9, 5, 7, 1, 3]
# arr2 = [1, 3, 5, 7]

# # print(sorted(arr1))
# print(quartiles(arr1))
# print(quartiles(arr2))
