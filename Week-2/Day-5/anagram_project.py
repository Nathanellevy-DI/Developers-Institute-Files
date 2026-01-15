
class AnagramChecker:
    # Step 1: Load word list from file
    def __init__(self, filepath="wordlist.txt"):
        with open(filepath, "r") as file:
            self.wordlist = {word.strip().lower() for word in file.readlines()}

    # Step 2: Check if the word is valid
    def is_valid_word(self, word):
        word = word.lower()
        return word in self.wordlist

    # Step 3: Check if two words are anagrams
    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())

    # Step 4: Get all anagrams of a word
    def get_anagrams(self, word):
        word = word.lower()
        anagrams = []

        for w in self.wordlist:
            if w != word and self.is_anagram(word, w):
                anagrams.append(w)

        return anagrams



# USER INTERFACE LOGIC


def show_menu():
    print("\n=== ANAGRAM CHECKER ===")
    print("1. Enter a word")
    print("2. Exit")


def main():
    checker = AnagramChecker("wordlist.txt")

    while True:
        show_menu()
        choice = input("Choose an option (1 or 2): ").strip()

        if choice == "2":
            print("Goodbye!")
            break

        elif choice == "1":
            user_input = input("Enter a word: ").strip()

            # Validate only one word
            parts = user_input.split()
            if len(parts) != 1:
                print("Error: You must enter ONLY one word.")
                continue

            word = parts[0]

            # Validate alphabetic only
            if not word.isalpha():
                print("Error: Word must contain ONLY letters (A–Z).")
                continue

            # Validate English word
            if not checker.is_valid_word(word):
                print(f'"{word}" is NOT a valid English word.')
                continue

            # Get anagrams
            anagrams = checker.get_anagrams(word)

            # Display results
            print("\nYOUR WORD:", word.upper())
            print("This is a valid English word.")

            if anagrams:
                print("Anagrams found:", ", ".join(anagrams))
            else:
                print("No anagrams found.")

        else:
            print("Invalid choice. Pick option 1 or 2.")


# Start program
if __name__ == "__main__":
    main()
