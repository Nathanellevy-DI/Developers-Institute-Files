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
        person = Person(first_name, age)
        person.last_name = self.last_name
        self.members.append(person)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print(
                        f"You are over 18, your parents accept that you will go out with your friends"
                    )
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return

    def family_presentation(self):
        print(f"Family last name: {self.last_name}")
        for member in self.members:
            print(f"{member.first_name}, {member.age} years old")


# Testing the classes
my_family = Family("Smith")

my_family.born("John", 40)
my_family.born("Jane", 38)
my_family.born("Emily", 16)
my_family.born("Alex", 20)

my_family.check_majority("Emily")
my_family.check_majority("Alex")
my_family.family_presentation()
