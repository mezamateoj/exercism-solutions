# https://exercism.org/tracks/python/exercises/triangle

"""Instructions
Determine if a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has at least two sides the same length. 
(It is sometimes specified as having exactly two sides the same length, 
but for the purposes of this exercise we'll say at least two.)

A scalene triangle has all sides of different lengths."""

"""For a shape to be a triangle at all, all sides have to be of length > 0, 
and the sum of the lengths of any two sides must be greater than or equal to 
the length of the third side."""
# sides are an array of 3 integers.

def equilateral(sides):
    if any(sides) <= 0:
        return False
    return sides[:-1] == sides[1:]    



def isosceles(sides):
    # equilateral triangles are also isosceles
    if equilateral(sides):
        return True
    elif sum(sides[:-1]) < sides[-1] or sum(sides[1:]) < sides[0] or sum([sides[0], sides[-1]]) < sides[1]:
        return False    
    elif any(sides.count(x) == 2 for x in sides):
        return True
    return False




def scalene(sides):
    if any(sides.count(x) > 1 for x in sides):
        return False
    return True

