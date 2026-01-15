# exercise_xp.py

# 🌟 Exercise 1: Favorite Numbers
print("🌟 Exercise 1: Favorite Numbers")

my_fav_numbers = {7, 14, 21}
my_fav_numbers.add(28)
my_fav_numbers.add(35)
my_fav_numbers.remove(35)
friend_fav_numbers = {3, 7, 10, 14}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)
print("-" * 40)

# 🌟 Exercise 2: Tuple
print("🌟 Exercise 2: Tuple")

numbers = (1, 2, 3, 4)
new_numbers = numbers + (5, 6)
print("Original tuple:", numbers)
print("New tuple:", new_numbers)
print("-" * 40)

# 🌟 Exercise 3: List Manipulation
print("🌟 Exercise 3: List Manipulation")

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print("Apples count:", basket.count("Apples"))
basket.clear()
print("Final basket:", basket)
print("-" * 40)

# 🌟 Exercise 4: Floats
print("🌟 Exercise 4: Floats")

float_list = []
num = 1.5
while num <= 5:
    float_list.append(num)
    num += 0.5
print("Generated float list:", float_list)
print("-" * 40)

# 🌟 Exercise 5: For Loop
print("🌟 Exercise 5: For Loop")

print("Numbers from 1 to 20:")
for i in range(1, 21):
    print(i, end=" ")
print("\nEven numbers from 1 to 20:")
for i in range(1, 21):
    if i % 2 == 0:
        print(i, end=" ")
print("\n" + "-" * 40)

# 🌟 Exercise 6: While Loop
print("🌟 Exercise 6: While Loop")

while True:
    name = input("Enter your name: ")
    if name.isdigit() or len(name) < 3:
        print("Invalid name. Try again.")
    else:
        print("Thank you!")
        break
print("-" * 40)

# 🌟 Exercise 7: Favorite Fruits
print("🌟 Exercise 7: Favorite Fruits")

fruits = input("Enter your favorite fruits (separated by spaces): ").split()
fruit_choice = input("Enter a fruit name: ")

if fruit_choice in fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")
print("-" * 40)

# 🌟 Exercise 8: Pizza Toppings
print("🌟 Exercise 8: Pizza Toppings")

toppings = []
base_price = 10
price_per_topping = 2.5

while True:
    topping = input("Enter a pizza topping (or 'quit' to stop): ")
    if topping.lower() == 'quit':
        break
    else:
        toppings.append(topping)
        print(f"Adding {topping} to your pizza.")

total_cost = base_price + (len(toppings) * price_per_topping)
print("\nYour toppings:", toppings)
print("Total price: $", total_cost)
print("-" * 40)

# 🌟 Exercise 9: Cinemax Tickets
print("🌟 Exercise 9: Cinemax Tickets")

total_cost = 0

while True:
    age = input("Enter family member's age (or 'done' to finish): ")
    if age.lower() == 'done':
        break
    age = int(age)
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    total_cost += cost

print("Total ticket cost: $", total_cost)
print("-" * 40)
