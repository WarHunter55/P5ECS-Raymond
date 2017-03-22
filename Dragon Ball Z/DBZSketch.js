var DBZ;

function preload(){
	
	DBZ = loadJSON("DBZ.json", gotData)
}

function setup(){
	createCanvas(1000,1000);

	
}


function gotData(data){
	console.log(data);

}


function draw(){
	
	background(0);
	fill(DBZ.characters[2].red, DBZ.characters[2].green, DBZ.characters[2].blue);
	text(DBZ.characters[2].shortname, 10, 50);
	text(DBZ.characters[2].bio, 10, 60);
	
}