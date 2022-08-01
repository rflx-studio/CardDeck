class CardDeck extends EventTarget{
	constructor(){
		super();

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

		this.dispatchEvent( new CustomEvent('deck-builded', { detail: { deck: this.deck } }) );

		this.shuffleDeck();
	}

	shuffleDeck(){
		for(let i = this.deck.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
	    }
		console.log(this.deck);

		this.dispatchEvent( new CustomEvent('deck-shuffled', { detail: { deck: this.deck } }) );
	}

	createHand(){
		let hand = new Hand();
		this.hands.push(hand);

		this.dispatchEvent( new CustomEvent('hand-created', { detail: { hand: hand } }) );

		return hand;
	}

	dealDeckToHands(){
		for(let i = this.deck.length - 1; i > -1; i--){
			let card = this.deck.shift();
			let hand = this.hands[i%this.hands.length];

			hand.addCard(card);
		}

		this.dispatchEvent( new CustomEvent('deck-dealed', { detail: {} }) );
	}
}

class Hand extends EventTarget{
	constructor(uid = Math.round(new Date().getTime() + new Date().getTime() * Math.random())){
		super();

		this.uid = uid;
		this.cards = [];
		this.dom;

		this.buildDom();

		this.dispatchEvent( new CustomEvent('hand-created', { detail: { hand: this } }) );
	}

	buildDom(){
		this.dom = document.createElement('div');
		this.dom.classList.add('hand');
		this.dom.setAttribute('data-uid', this.uid);
	}

	addCard(card){
		this.cards.push(card);
		this.dom.append(card.dom);
		this.dispatchEvent( new CustomEvent('card-added', { detail: { hand: this } }) );

		card.dom.addEventListener("click", (e) => {
			console.log(this)
		});
	}
}

class Card extends EventTarget{
	constructor(family, value, color, icon){
		super();

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
		cardData.innerHTML = this.value + this.icon;
		this.dom.append(cardData);
	}
}