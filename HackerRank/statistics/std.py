import math
# Complete the 'stdDev' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def stdDev(arr):
    # Print your answers to 1 decimal place within this function
    n = len(arr)
    mean = sum(arr) / n
    sumSquares = sum([(x - mean)**2 for x in arr])

    return round(math.sqrt(sumSquares / n), 1)

    





# arr1 =[10, 40, 30, 50, 20]
# print(stdDev(arr1))