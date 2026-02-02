import random
from dog import Dog  # if Dog is in another file
# if same file, remove this import


class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")


# Step 3: Test PetDog methods
dog1 = PetDog("Fido", 2, 10)
dog2 = PetDog("Buddy", 3, 12)
dog3 = PetDog("Max", 4, 15)

dog1.train()
dog1.play(dog2, dog3)
dog1.do_a_trick()
