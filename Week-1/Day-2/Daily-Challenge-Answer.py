# daily_challenge.py

# 🌟 Challenge 1: Multiples of a Number
print("🌟 Challenge 1: Multiples of a Number")

# Ask the user for two inputs
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

# Create a list of multiples
multiples = []
for i in range(1, length + 1):
    multiples.append(number * i)

print("Generated multiples:", multiples)
print("-" * 40)

# 🌟 Challenge 2: Remove Consecutive Duplicate Letters
print("🌟 Challenge 2: Remove Consecutive Duplicate Letters")

# Ask the user for a string
word = input("Enter a word: ")

# Make sure the input isn't empty
if word:
    result = word[0]  # Start with the first character
    # Loop through the word and skip duplicates
    for char in word[1:]:
        if char != result[-1]:
            result += char
    print("Modified word:", result)
else:
    print("You didn't enter a word!")

print("-" * 40)
print("✅ Daily challenges complete!")
