class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}   # empty dictionary to store animals

    # Step 3 + Step 8 (support normal args AND kwargs)
    def add_animal(self, animal_type=None, count=1, **kwargs):
        # Handle single animal addition (normal version)
        if animal_type is not None:
            if animal_type in self.animals:
                self.animals[animal_type] += count
            else:
                self.animals[animal_type] = count

        # Handle multiple animals using kwargs
        for animal, qty in kwargs.items():
            if animal in self.animals:
                self.animals[animal] += qty
            else:
                self.animals[animal] = qty

    # Step 4: get_info
    def get_info(self):
        output = f"{self.name}'s farm\n\n"

        for animal, amount in self.animals.items():
            output += f"{animal} : {amount}\n"

        output += "\n    E-I-E-I-O!"
        return output

    # Step 6: sorted list of animal types
    def get_animal_types(self):
        return sorted(self.animals.keys())

    # Step 7: short info
    def get_short_info(self):
        animal_list = self.get_animal_types()
        final_words = []

        for animal in animal_list:
            count = self.animals[animal]
            # add "s" if plural
            if count > 1:
                final_words.append(animal + "s")
            else:
                final_words.append(animal)

        # Make list into a sentence
        if len(final_words) > 1:
            animals_sentence = ", ".join(final_words[:-1]) + " and " + final_words[-1]
        else:
            animals_sentence = final_words[0]

        return f"{self.name}'s farm has {animals_sentence}."

macdonald = Farm("McDonald")

macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())
