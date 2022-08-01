class CardDeck{
	constructor(){
		this.cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
		this.families = {
			spade: {
				icon: '♠',
				name: 'spade',
				color: '#000'
			},
			heart: {
				icon: '♥',
				name: 'heart',
				color: '#f00'
			},
			club: {
				icon: '♣',
				name: 'club',
				color: '#000'
			},
			diamond: {
				icon: '♦',
				name: 'diamond',
				color: '#f00'
			}
		};

		this.deck = [];
		this.hands = [];
		this.carpet = [];

		this.buildDeck();
	}

	buildDeck(){
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

		this.shuffleDeck();
	}

	shuffleDeck(){
		for(let i = this.deck.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
	    }
		console.log(this.deck);
	}

	createHand(){
		this.hands.push(new Hand());
	}

	dealWholeDeck(){
		this.hands.push(new Hand());
	}
}

class Hand{
	constructor(uid = Math.round(new Date().getTime() + new Date().getTime() * Math.random())){
		this.uid = uid;
		this.cards = [];
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