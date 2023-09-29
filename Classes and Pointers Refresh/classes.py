class Cookie:
    # constructor
    def __init__(self, color) -> None:
        self.color = color

    # class methods
    def get_color(self):
        return self.color

    def set_color(self, color):
        self.color = color


cookie_one = Cookie('green')
cookie_two = Cookie('blue')

print(f'cookie one color: {cookie_one.get_color()}')
print(f'cookie two color: {cookie_two.get_color()}')

cookie_two.set_color('red')
print(f'cookie two new color: {cookie_two.get_color()}')
