user_string = input("Enter a string (exactly 10 characters): ")
if len(user_string) < 10:
    print("String not long enough.")
elif len(user_string) > 10:
    print("String too long.")
else:
    print("Perfect string!")

    print("First character:", user_string[0])
    print("Last character:", user_string[-1])
    print("\nBuilding up the string:")
    for i in range(1, len(user_string) + 1):
        print(user_string[:i])
    import random
    shuffled = list(user_string)
    random.shuffle(shuffled)
    jumbled = ''.join(shuffled)
    print("\nJumbled string:", jumbled)
