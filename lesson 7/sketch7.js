/*
Regex

var s = "hello";
s.indexOf(o);
var s - "\d";
var r = /hello/;
var r = /\d/;
r.indexOf(asdfghjkasdfhjk);
r.length();

r.test();
*/


var txt;
function preload(){
	txt = loadStrings("sample7.txt");
} 

 
function setup(){
	noCanvas();
	
	seed = select('#seed');
	
	var button = select('#submit');
	button.mousePressed(replacing);
	
}


function test(){
	
	var s = seed.value();
	var r = /[.\w]+@\w+(.com|.edu|.org)/
	createP(r.test(s));
}

function matching(){
	
	var s = seed.value();
	var r= /\d{3}-\d{4}/g;
	var matches = s.match(r);
	
		for(var i = 0; i < matches.length; i++){
		createP(matches[i]);
		}
	
}

/*

s.split(regex);
or
s.split(regex, function);

*/



function splitting(){
	
	var s = seed.value();
	var r = /[.,!?\s]+/;
	
	var words = s.split(r);
	createP(words);
	
	
	for(var i = 0; i < words.length; i++){
	createP(words[i]);
	}
	
}





function replacing(){
	
	var s = seed.value();
	var r = /Donald Trump/g;
	
	var newstring = s.replace(r,trumpquote);
	console.log(newstring);
	createP(newstring);
	
}


function randostring(match, group1){
	
	if (match.length == 4){
		return match.toUpperCase();
	}else{
		return match;
	}
	
}



function trumpquote(match){
	
    // console.log(txt);

	/*
	randomnum = txt.length
	txt[randomnum]= trumpquote
	output = Donald + trumpquote + Trump
	*/

	var randquote = random(txt);
	console.log(randquote);
	
	var replacedname = "Donald " + randquote + " Trump";
	
	return replacedname
	


}
