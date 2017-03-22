var input;


var lexicon; 


function setup(){
	
	noCanvas();
	input = createInput("It was a dark and stormy night.");
	input.size(300);
	
	button = createButton('submit');
	
	input.changed(processRita);
	button.mousePressed(processRita);
	
	
	lexicon = new RiLexicon;
	console.log(lexicon);
	//var r = new RiString();
	
	
	//to look at features
	//console.log(r.features());
	
}

function processRita(){
	var s = input.value();
	var r = new RiString(s);
	
	var wordarray = r.words();
	console.log(wordarray);
	
	//rebuild sentence
	var output = '';

	
	
	//part of speech
	var partofs = r.pos();
	console.log(partofs);
	
	var rhymes
	for (var i = 0; i < wordarray.length; i++){
		
		//if its a noun replace it
		
		if (/jj.*/.test(partofs[i])){
		rhymes = lexicon.rhymes(wordarray[i]);
		output += random(rhymes);	
		}else{
			output += wordarray[i];

		}
		
		output += ' ';
	}
	createP(output);
}


