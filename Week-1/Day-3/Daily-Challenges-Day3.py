# Daily Challenges Day 3

#— Letter Index Dictionary

# Ask the user for a word
word = input("Enter a word: ")

# Create an empty dictionary to store letters and their indices
letter_index_dict = {}

# Loop through each character in the word
for index, letter in enumerate(word):  
    # enumerate() gives both index and value at the same time
    if letter in letter_index_dict:
        # If the letter already exists, append the new index
        letter_index_dict[letter].append(index)
    else:
        # If it's the first time we see this letter, create a new list
        letter_index_dict[letter] = [index]

# Print the final dictionary
print(letter_index_dict)

# Exercise 2 


# Given data
items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

# 1 Clean up the wallet amount (remove $ and commas, then convert to int)
wallet = int(wallet.replace("$", "").replace(",", ""))

# 2 Create an empty list for affordable items
basket = []

# 3 Loop through items in order (dictionaries preserve order in Python 3.7+)
for item, price in items_purchase.items():
    # Clean the price (remove $ and commas)
    clean_price = int(price.replace("$", "").replace(",", ""))
    
    # Check if we can afford the item
    if wallet >= clean_price:
        basket.append(item)      # Add to basket
        wallet -= clean_price    # Subtract from wallet

# 4 Output results
if not basket:  # if basket is empty
    print("Nothing")
else:
    print(sorted(basket))  # sort items alphabetically before printing
