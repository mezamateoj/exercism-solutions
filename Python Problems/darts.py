# https://exercism.org/tracks/python/exercises/darts

def score(x, y):
    points = 0
    points = {}
    if x ==0 and y == 0:
        points += 10
    elif x == 0 and y > 0:
        points += 1
    return points
