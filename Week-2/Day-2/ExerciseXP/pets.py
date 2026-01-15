class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} is just walking around"


class Bengal(Cat):
    def sing(self, sounds):
        return sounds


class Chartreux(Cat):
    def sing(self, sounds):
        return sounds


# Step 1: Create the Siamese class
class Siamese(Cat):
    pass


# Step 2: Create a list of cat instances
bengal_cat = Bengal("Leo", 3)
chartreux_cat = Chartreux("Milo", 5)
siamese_cat = Siamese("Luna", 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# Step 3: Create a Pets instance
sara_pets = Pets(all_cats)

# Step 4: Take cats for a walk
sara_pets.walk()
