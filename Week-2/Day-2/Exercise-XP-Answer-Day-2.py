
# EXERCISE 1: PETS & CATS


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
        return f"{sounds}"


class Chartreux(Cat):
    def sing(self, sounds):
        return f"{sounds}"


# Step 1: Create Siamese class
class Siamese(Cat):
    pass


# Step 2: Create cat instances
cat1 = Bengal("Simba", 3)
cat2 = Chartreux("Luna", 5)
cat3 = Siamese("Milo", 2)

all_cats = [cat1, cat2, cat3]

# Step 3: Pets instance
sara_pets = Pets(all_cats)

# Step 4: Walk all pets
print("\n--- EXERCISE 1 ---")
sara_pets.walk()


# EXERCISE 2: DOGS

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} wins the fight!"
        elif my_power < other_power:
            return f"{other_dog.name} wins the fight!"
        else:
            return "It's a tie!"


# Step 2: Create dogs
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 15)
dog3 = Dog("Rocky", 4, 25)

print("\n--- EXERCISE 2 ---")
print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog3))

# EXERCISE 3: PETDOG

import random
from random import choice

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = ", ".join(dog.name for dog in args)
        print(f"{self.name}, {names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", 
                      "stands on his back legs", 
                      "shakes your hand", 
                      "plays dead"]
            print(f"{self.name} {choice(tricks)}")


print("\n--- EXERCISE 3 ---")
petdog1 = PetDog("Charlie", 2, 12)
petdog2 = PetDog("Max", 4, 18)
petdog3 = PetDog("Oscar", 3, 10)

petdog1.train()
petdog1.play(petdog2, petdog3)
petdog1.do_a_trick()


# EXERCISE 4: FAMILY & PERSON


class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name
        self.members.append(new_person)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print("Person not found in family.")

    def family_presentation(self):
        print(f"\nThe {self.last_name} family:")
        for member in self.members:
            print(f"{member.first_name}, {member.age} years old")


print("\n--- EXERCISE 4 ---")

# Creating your family (with correct spelling! "Nathanel")
levy_family = Family("Levy")
levy_family.born("Nathanel", 21)
levy_family.born("Sarah", 16)

levy_family.family_presentation()
levy_family.check_majority("Nathanel")
