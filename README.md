# CardDeck
♠♥♣♦ A class to help during card games creation.

## How it works
### Create a fresh deck of card
This will create a classic card deck of 52 cards.
The family are ordered like this : Spades, Hearts, Clubs, Diamonds.
Within thoses families cards are ordered from 2 to Ace.

```javascript
let myDeck = new CardDeck();
```

### Shuffle the deck
To shuffle the deck, you can use the shuffleDeck method :
```javascript
myDeck.shuffle();
```

### Pick cards
To pick a card you can use the pickCards() method. This method returns the first card of the deck :
```javascript
myDeck.pickCards();
```
If you wants more than one card, lets say 5, you can pass a int as parameters :
```javascript
myDeck.pickCards(5); // Returns the 5 first cards of the deck
```

If you need to pick one or more card but randomely in the deck you can passe a boolean to pickCards methode like this :
```javascript
myDeck.pickCards(5, true); // Returns 5 cards from the deck but picked randomely in the deck.
```
### About the cards
The returned cards got those properties :
- color:String -> Can be red or black.
- family:String -> Can be spade, heart, club, diamond.
- icon:String -> Emoji ♠ ♥ ♣ ♦.
- uid:String -> Concat the value + the family the card belongs to.
- value:String -> Can be 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A.

For instance, here is the 2 of Spades :
```javascript
color: "black"
family: "spade"
icon: "♠"
uid: "2spade"
value: "2"
```

Have fun.
