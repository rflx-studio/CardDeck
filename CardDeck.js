class MorseJS{
	static charCode = {
		'a' : '.-',
		'b' : '-...',
		'c' : '-.-.',
		'd' : '-..',
		'e' : '.',
		'f' : '..-.',
		'g' : '--.',
		'h' : '....',
		'i' : '..',
		'j' : '.---',
		'k' : '-.-',
		'l' : '.-..',
		'm' : '--',
		'n' : '-.',
		'o' : '---',
		'p' : '.--.',
		'q' : '--.-',
		'r' : '.-.',
		's' : '...',
		't' : '-',
		'u' : '..-',
		'v' : '...-',
		'w' : '.--',
		'x' : '-..-',
		'y' : '-.--',
		'z' : '--..',
		'1' : '.----',
		'2' : '..---',
		'3' : '...--',
		'4' : '....-',
		'5' : '.....',
		'6' : '-....',
		'7' : '--...',
		'8' : '---..',
		'9' : '----.',
		'0' : '-----'
	}

	static crypt(message){
		let cryptedMessage = '';
		let cleanedMessage = message.replaceAll(' ', '');

		for(let char in cleanedMessage){
			let n = MorseJS.charCode[cleanedMessage[char].toLowerCase()];

			if(n != null){
				if(char > 0){
					cryptedMessage += ' ';
				}

				cryptedMessage += n;
			}
		}

		return cryptedMessage;
	}

	static parse(cryptedMessage){
		let parsedMessage = '';
		let chars = cryptedMessage.split(' ');

		for(let char in chars){
			parsedMessage += MorseJS.getCharFromCode(chars[char]);
		}

		return parsedMessage;
	}

	static getCharFromCode(code){
		return Object.keys(MorseJS.charCode).find(key => MorseJS.charCode[key] === code);
	}
}