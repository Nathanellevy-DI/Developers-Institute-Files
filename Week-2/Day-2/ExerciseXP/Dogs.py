class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} won the fight"
        else:
            return f"{other_dog.name} won the fight"


# Step 2: Create dog instances
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 18)
dog3 = Dog("Max", 4, 25)

# Step 3: Test dog methods
print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog3))
