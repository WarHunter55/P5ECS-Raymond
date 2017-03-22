var characters;

function preload(){
	
	items = loadJSON("sample13.JSON", gotData)
}

function setup(){
	createCanvas(1000,1000);

	
}


function gotData(data){
	console.log(data);

}


function draw(){
	
	background(0);
	fill(items.weapons[2].red, items.weapons[2].green, items.weapons[2].blue);
	text(items.weapons[2].name, 10, 50);
	text(items.weapons[2].location, 10, 60);
	
}