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
		this.hands = [];
		this.table = [];

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
		let hand = new Hand();
		document.querySelector('body').append(hand.dom);
		this.hands.push(hand);
	}

	dealDeckToHands(){
		for(let i = this.deck.length - 1; i > -1; i--){
			let card = this.deck.shift();
			let hand = this.hands[i%this.hands.length];

			hand.addCard(card);
		}
	}
}

class Hand{
	constructor(uid = Math.round(new Date().getTime() + new Date().getTime() * Math.random())){
		this.uid = uid;
		this.cards = [];
		this.dom;

		this.buildDom();
	}

	buildDom(){
		this.dom = document.createElement('div');
		this.dom.classList.add('hand');
		this.dom.setAttribute('data-uid', this.uid);
	}

	addCard(card){
		this.cards.push(card);
	}
}

class Card{
	constructor(family, value, color, icon){
		this.family = family;
		this.value = value;
		this.color = color;
		this.icon = icon;
		this.uid = this.value + this.family;

		this.dom;

		this.buildDom();
	}

	buildDom(){
		this.dom = document.createElement('div');
		this.dom.setAttribute('data-uid', this.uid);
		this.dom.classList.add(this.color, "card");
		let cardData = document.createElement('div');
		cardData.classList.add('values');
		cardData.innerHTML = this.value + this.family;
	}
}