import string
import re

# Part I: Text Analysis

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        count = words.count(word)
        if count == 0:
            return None
        return count

    def most_common_word(self):
        words = self.text.split()
        freq = {}
        for w in words:
            if w not in freq:
                freq[w] = 1
            else:
                freq[w] += 1
        
        most_common = None
        highest = 0
        for word, count in freq.items():
            if count > highest:
                highest = count
                most_common = word
        
        return most_common

    def unique_words(self):
        words = self.text.split()
        unique = set(words)
        return list(unique)

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, "r") as file:
            content = file.read()
        return cls(content)


# Part II: Text Modification

class TextModification(Text):
    def remove_punctuation(self):
        punctuation = string.punctuation
        cleaned = ""
        for char in self.text:
            if char not in punctuation:
                cleaned += char
        return cleaned

    def remove_stop_words(self):
        stop_words = [
            "a", "the", "is", "in", "on", "and", "to", "of", "it", "that", "this",
            "for", "with", "as", "at", "be", "by"
        ]
        words = self.text.split()
        filtered = []
        for word in words:
            if word.lower() not in stop_words:
                filtered.append(word)
        return " ".join(filtered)

    def remove_special_characters(self):
        cleaned = re.sub(r"[^A-Za-z0-9\s]", "", self.text)
        return cleaned
