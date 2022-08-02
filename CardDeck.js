class CardDeck{
	constructor(){
		this.cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
		this.families = {
			spade: {
				icon: '♠',
				name: 'spade',
				color: 'black'
			},
			heart: {
				icon: '♥',
				name: 'heart',
				color: 'red'
			},
			club: {
				icon: '♣',
				name: 'club',
				color: 'black'
			},
			diamond: {
				icon: '♦',
				name: 'diamond',
				color: 'red'
			}
		};

		this.deck = [];

		this.generateDeck();
	}

	generateDeck(){
		if(this.deck.length != 0){
			this.deck = [];
		}

		for(let f in this.families){
			let fData = this.families[f];

			for(let c in this.cards){
				let card = new Card(fData.name, this.cards[c], fData.color, fData.icon);
				this.deck.push( card );
			}
		}
	}

	shuffleDeck(){
		for(let i = this.deck.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
	    }
		console.log(this.deck);
	}

	pickACard(randomCard = false){
		if(!randomCard){
			return this.deck.shift();
		}
		else{
			return this.deck.splice(Math.floor(Math.random()*this.deck.length), 1);
		}
	}

	pickCards(count = 1, randomCard = false){
		let cards = [];

		for(let i = 0; i < count; i++){
			cards.push(this.pickACard(randomCard));
		}

		return cards;
	}
}

class Card{
	constructor(family, value, color, icon){
		this.family = family;
		this.value = value;
		this.color = color;
		this.icon = icon;
		this.uid = this.value + this.family;
	}
}