var url1 = 'http://api.wordnik.com:80/v4/word.json/';

var word = 'taco';

var url2 = '/relatedWords?useCanonical=true&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

function setup(){
	
	noCanvas();
	loadJSON(url1+word+url2, gotData);
	
}


function gotData(data){
	console.log(data);
	
}