class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide a radius or a diameter")

    def area(self):
        return 3.14 * (self.radius ** 2)

    def __str__(self):
        return f"Circle with radius {self.radius} and diameter {self.diameter}"

    def __repr__(self):
        return f"Circle(radius={self.radius})"

    def __add__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only add Circle to Circle")
        new_radius = self.radius + other.radius
        return Circle(radius=new_radius)

    def __gt__(self, other):
        return self.radius > other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius



c1 = Circle(radius=4)
c2 = Circle(diameter=10)

print(c1)  
print(c2)

print("Area of c1:", c1.area())
print("Area of c2:", c2.area())

c3 = c1 + c2
print("New circle after adding:", c3)

print("c1 > c2 ?", c1 > c2)
print("c1 == c2 ?", c1 == c2)

circles = [c1, c2, c3]
circles.sort()
print("Sorted circles:", circles)
