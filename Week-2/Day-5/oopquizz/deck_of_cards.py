import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    def __init__(self):
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = [Card(suit, value) for suit in self.suits for value in self.values]

    def shuffle(self):
        """Shuffle the deck randomly."""
        random.shuffle(self.cards)

    def deal(self):
        """Deal a single card. Remove it from the deck."""
        if len(self.cards) == 0:
            print("No more cards to deal!")
            return None
        return self.cards.pop()

# Example usage:
deck = Deck()
deck.shuffle()

print("Dealing 5 cards:")
for _ in range(5):
    card = deck.deal()
    print(card)

print(f"Cards remaining in deck: {len(deck.cards)}")
