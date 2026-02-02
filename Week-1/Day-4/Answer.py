
#  Exercise 1: What Are You Learning?


def display_message():
    """Display a message about what you're learning."""
    print("I am learning about functions in Python.")

# Call the function
display_message()



#  Exercise 2: What’s Your Favorite Book?


def favorite_book(title):
    """Display a message about a favorite book."""
    print(f"One of my favorite books is {title}.")

# Call the function
favorite_book("Alice in Wonderland")



#  Exercise 3: Some Geography


def describe_city(city, country="Unknown"):
    """Display a sentence about a city and its country."""
    print(f"{city} is in {country}.")

# Calls
describe_city("Reykjavik", "Iceland")
describe_city("Paris")



#  Exercise 4: Random Number Guess


import random

def compare_numbers(user_number):
    """Compare user's number to a random number."""
    random_number = random.randint(1, 100)
    
    if user_number == random_number:
        print("Success! 🎉 You guessed the number!")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

# Call the function
compare_numbers(50)



#  Exercise 5: Let’s Create Some Personalized Shirts!


def make_shirt(size="large", text="I love Python"):
    """Describe the shirt being made."""
    print(f"The size of the shirt is {size} and the text is '{text}'.")

# Calls
make_shirt()  # default values
make_shirt("medium")  # change size, keep text
make_shirt("small", "Keep calm and code on")  # custom
make_shirt(size="extra large", text="Hello!")  # keyword args



#  Exercise 6: Magicians…


magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(names):
    """Print each magician's name."""
    for name in names:
        print(name)

def make_great(names):
    """Add 'the Great' to each magician's name."""
    for i in range(len(names)):
        names[i] = names[i] + " the Great"

# Modify and show
make_great(magician_names)
show_magicians(magician_names)



#  Exercise 7: Temperature Advice


def get_random_temp():
    """Return a random temperature between -10 and 40°C."""
    return random.randint(-10, 40)

def main():
    """Get a random temp and print advice."""
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif temp < 24:
        print("Nice weather.")
    elif temp < 33:
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")

# Run the program
main()

