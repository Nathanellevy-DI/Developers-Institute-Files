
# Exercise 1

import random

# Step 1: Read words from file
def get_words_from_file(file_path):
    try:
        with open(file_path, "r") as file:
            content = file.read()
            words = content.split()
            return words
    except FileNotFoundError:
        print("File not found.")
        return []

# Step 2: Generate a random sentence
def get_random_sentence(length):
    words = get_words_from_file("words.txt")
    sentence_words = []
    for _ in range(length):
        sentence_words.append(random.choice(words))
    sentence = " ".join(sentence_words)
    return sentence.lower()

# Step 3: Main function
def main():
    print("This program generates a random sentence of a given length.")
    user_input = input("Enter sentence length (between 2 and 20): ")

    # Validate input
    if not user_input.isdigit():
        print("Invalid input. Must be a number.")
        return

    length = int(user_input)

    if length < 2 or length > 20:
        print("Number must be between 2 and 20.")
        return

    result = get_random_sentence(length)
    print("Generated sentence:")
    print(result)

# Uncomment the line below to run
# main()

# Exercise 2 


import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Step 1: Load the JSON string
data = json.loads(sampleJson)

# Step 2: Access salary
salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

# Step 3: Add birth_date
data["company"]["employee"]["birth_date"] = "1990-05-12"

# Step 4: Save to a new JSON file
with open("modified_data.json", "w") as file:
    json.dump(data, file, indent=4)
