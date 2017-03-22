/*


synchronous:

function preload(){
var items = loadJSON("items.json");
}


asynchronous:

loadJSON("items.json", gotData);


function gotData(data){

DO STUFF HERE WHEN LOADED

}

*/

var spaceData;
var x = 0;
function setup(){
	
	createCanvas(500, 500);
	loadJSON("http://api.open-notify.org/astros.json", gotData);
	
}


function gotData(data){
	console.log(data);
	
	//for(var i = 0; i < data.people.length; i++){
	//	
	//	ellipse(random(width),random(height), 16, 16);
	//
	//
	//
	
	spaceData = data;
	
	
	}


function draw(){
	
	background(50, 100, 200);
	stroke(255);
	line(x, 0, x, height);
	x = x + 1;
	
	if (x > width){
		x = 0;	
	}
	if(spaceData){
		randomSeed(4);
	
	
	for(var i = 0; i < spaceData.people.length; i++){
	ellipse(random(width), random(height), 16, 16);
	
	}
	}
	
}
