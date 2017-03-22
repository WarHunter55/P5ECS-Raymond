var input;
var button;
var lexicon;


var nlp = window.nlp_compromise;


function setup(){
	
	noCanvas();
	input = createInput("I am the all ruler of everything. I will take over the world.");
	input.size(300);
	
	button = createButton('submit');
	
	input.changed(process2);
	button.mousePressed(process2);
	
	
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



function process(){
	
	
	var s = input.value();
	
	var statement = nlp.statement(s);
	var output = statements.negate().text();
	createP(output);
	
}



function process2(){
	var s = input.value();
	var sen = nlp.sentence(s);
	
	var output = ' ';
	for (var i = 0; i < sen.terms.length; i++){
		
		var pos = sen.terms[i].pos;
		var word = sen.terms[i].text;

		if(pos.Noun&& !pos.Pronoun){
			word = nlp.noun(word).pluralize();
		}else if(pos.Verb){
			
		word = nlp.verb(word).conjugate().future;	
			
		}
		
		if(pos.Adjective){
		word = nlp.match(word).replaceWith("silly").all().out();
		}
		
			
		output += word;
		output += sen.terms[i].whitespace.trailing;
		
		
		
	}
	createP(output);
	
}

