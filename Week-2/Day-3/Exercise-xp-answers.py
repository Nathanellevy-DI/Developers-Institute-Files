# Daily Exercises - All In One File

# Exercise 1: Currency Class
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __repr__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return self.amount + other.amount
        raise TypeError("Unsupported type for addition")

    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
            return self
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
            return self
        raise TypeError("Unsupported type for in-place addition")

# Exercise 2: Module Import Simulation
# Since everything is in one file, we'll simulate module behavior

def sum_two_numbers(a, b):
    print(a + b)

# Exercise 3: Random String Generator
import string
import random

def random_string():
    letters = string.ascii_letters
    result = ""
    for _ in range(5):
        result += random.choice(letters)
    return result

# Exercise 4: Current Date
import datetime

def show_date():
    today = datetime.date.today()
    print(today)

# Exercise 5: Time Until January 1st

def time_until_jan1():
    now = datetime.datetime.now()
    next_year = now.year + 1
    jan1 = datetime.datetime(next_year, 1, 1)
    diff = jan1 - now
    print(diff)

# Exercise 6: Minutes Lived

def minutes_lived(birthdate_str):
    birthdate = datetime.datetime.strptime(birthdate_str, "%Y-%m-%d")
    now = datetime.datetime.now()
    diff = now - birthdate
    minutes = diff.total_seconds() // 60
    print(int(minutes))

# Exercise 7: Faker Module
from faker import Faker

faker = Faker()
users = []

def add_users(n):
    for _ in range(n):
        user = {
            "name": faker.name(),
            "address": faker.address(),
            "language_code": faker.language_code()
        }
        users.append(user)

