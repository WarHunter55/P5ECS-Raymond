var srctct;
var words;
function preload(){

	srctxt = loadStrings('sample5.txt');
}


function setup(){
	noCanvas();
	srctxt = join(srctxt,' ');

	words = splitTokens(srctxt, ' ,!.?@#$%&*');	

	var seed = select('#seed');
	var submit = select('#submit');    
	submit.mousePressed(function(){
		//createP(seed.value());
		//createP(srctxt);
		var poem = diastic(seed.value(), words);
		createP(poem);

	});


}


function diastic(seed, words){


	var phrase = "";
	var currentWord =  0;

	//1. how can we find the character at the words index
	//SEED: Rainbow
	//PHRASE: Ralph sat on painful ferns

	for (var i = 0; i < seed.length; i++){
		var c = seed.charAt(i);
		//createP(c)

		for (var j = currentWord; j < words.length; j++){
			/*Create a case such that the word in the word array has a letter the identical to the seed phrase*/

			if (words[j].charAt(i) == c){
				phrase += words[j];
				phrase+= " ";
				currentWord = j + 1;
				console.log(words[j]);
				break;

			}


		}

	}

return phrase
}