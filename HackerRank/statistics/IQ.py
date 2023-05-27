#
# Complete the 'interQuartile' function below.
#
# The function accepts following parameters:
#  1. INTEGER_ARRAY values
#  2. INTEGER_ARRAY freqs
#
def interQuartile(values, freqs):

    def expand_by_frequency(values, frequencies):
        return [value for value, frequency in zip(values, frequencies) for _ in range(frequency)]
    
    newValues = expand_by_frequency(values, freqs)
    newValues.sort()
    length = len(newValues)

    def find_median(numbers):
        n = len(numbers)
        if n % 2 == 0:
            return (numbers[n // 2 - 1] + numbers[n // 2]) / 2
        
        return numbers[n // 2]
        
    lower_half = newValues[:length // 2] if length % 2 == 0 else newValues[:length // 2]
    upper_half = newValues[length // 2 + 1:] if length % 2 != 0 else newValues[length // 2:]
    
    q1 = find_median(lower_half)
    q3 = find_median(upper_half)
    
    return round(float(q3 - q1), 1)
    

# values1 = [6, 12, 8 ,10 ,20 ,16]
# freqs1 = [5, 6, 7, 8, 9, 10]

# print(interQuartile(values1, freqs1))
