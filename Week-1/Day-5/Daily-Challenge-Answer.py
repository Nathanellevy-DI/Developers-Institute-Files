# Daily Challenge 
# Topics: Strings, Lists, Sorting, Functions

# Challenge 1: Sorting

def sort_words():
    # Step 1: Get input from the user
    words = input("Enter words separated by commas: ")

    # Step 2: Split the string into a list
    word_list = words.split(",")

    # Step 3: Sort the list alphabetically
    word_list.sort()

    # Step 4: Join the sorted list back into a string
    sorted_words = ",".join(word_list)

    # Step 5: Print the result
    print(sorted_words)


# Challenge 2: Longest Word

def longest_word(sentence):
    # Step 1: Split the sentence into words
    words = sentence.split()

    # Step 2: Initialize variables
    longest = ""

    # Step 3: Loop through the words
    for word in words:
        # Step 4: Check if this word is longer than the current longest
        if len(word) > len(longest):
            longest = word

    # Step 5: Return the longest word
    return longest

# Test the challenges

# Challenge 1 - Sorting
print("\n--- Challenge 1: Sorting ---")
sort_words()

# Challenge 2 - Longest Word
print("\n--- Challenge 2: Longest Word ---")
# You can change the sentences below to test different examples
print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))
