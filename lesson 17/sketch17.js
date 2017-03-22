var url1 = 'http://api.wordnik.com:80/v4/word.json/';
var word = 'cupcake';
var url2 =  '/relatedWords?useCanonical=true&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

function setup (){
    noCanvas();
   
	link = createA('#', word);
	link.mousePressed(askWordnik);

}

function gotData(data){
    console.log(data);
	
	var index1 = floor(random(0, data.length));
	var index2 = floor(random(0, data[index1].words.length));
	
	
	word = data[index1].words[index2];
	console.log(data[index1].words[index2])
	createP(data[index1].words[index2]);
	
}


function askWordnik(){
	
	loadJSON(url1+word+url2, gotData);
	
}

