# Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))

print(result)


# Exercise 2 
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():  # .items() gives both key and value
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    print(f"{name.title()} has to pay ${price}")
    total_cost += price

print(f"Total cost for the family: ${total_cost}")

# Exercise 3 
brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': 'blue',
        'Spain': 'red',
        'US': ['pink', 'green']
    }
}

# 1. Change number_stores to 2
brand['number_stores'] = 2

# 2. Print sentence about clients
print(f"Zara’s clients are {', '.join(brand['type_of_clothes'])}.")

# 3. Add a new key
brand['country_creation'] = 'Spain'

# 4. Check if competitors exist, add 'Desigual'
if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')

# 5. Delete creation_date
brand.pop('creation_date')

# 6. Print last competitor
print("Last competitor:", brand['international_competitors'][-1])

# 7. Print major colors in the US
print("Major colors in the US:", brand['major_color']['US'])

# 8. Print number of keys
print("Number of keys in brand dictionary:", len(brand))

# 9. Print all keys
print("All keys:", list(brand.keys()))

# Bonus: merge dictionaries
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10_000
}

brand.update(more_on_zara)

print("\nUpdated brand dictionary:")
print(brand)

# Exercise 4

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# 1. Characters to their indices
dict1 = {user: index for index, user in enumerate(users)}
print("1 Characters to indices:", dict1)

# 2. Indices to characters
dict2 = {index: user for index, user in enumerate(users)}
print("2 Indices to characters:", dict2)

# 3. Alphabetically sorted characters to indices

sorted_users = sorted(users)
dict3 = {user: index for index, user in enumerate(sorted_users)}
print("3 Sorted characters to indices:", dict3)