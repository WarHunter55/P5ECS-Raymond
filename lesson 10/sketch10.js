var x = 0;
var timer1;
var timer2;
var counter = 0;
var phrase;


function setup(){
	noCanvas();
	timer1 = createP('timer 1');
	timer2 = createP('timer 2')
	
	
	//setInterval(timeIt, 500);
	makeTimer(timer1, 500);
	makeTimer(timer2, 321);
	first();
	createP(phrase);
	
	
	apitest();
	
}


function makeTimer(timer, wait){
	
	var counter = 0;
	setInterval(timeIt, wait);

	function timeIt(){
	timer.html(counter);
	counter++;
	
}
	
	
}


function first(){
	
	
	var randomword = "hello world";
	second();
	function second(){
		
		randomword +="!!!!!!";
	}
	phrase = randomword;
}

function apitest(){
	var words = ['vegeta', 'bulma', 'goku', 'gohan', 'hamehamehaaaaaaaaaaaaaaaa', 'final flash'];
	
	
	for (var i = 0; i < words.length; i++){
		
		var a = createA('#', words[i]);
		assignQuery(a, words[i]);
		
	}
	
}


function assignQuery(elt, word){
	
	elt.mousePressed(queryAPI);
	function queryAPI(){
		var url = 'http://api.madeup.com/?q='+word;
		loadJSON(url, gotData);
	}
	
	function gotData(data){
		
		makeTimer(timer1, 100);
		
	}
	
	
}