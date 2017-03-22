
var txt;

function preload(){
	txt = loadStrings("sample4.txt");
	
}

function setup(){
	noCanvas();
	
	//console.log(txt);
	//createP(txt);
	//createP(join(txt, "<br/>"));
	
	createFileInput(fileupload);
	
	//button
	var button = select('#loadtextfile');
	button.mousePressed(loadTXT);	

}


function fileupload(file){
	
	console.log(file);
	createP(file.name + " " + file.size + " " + file.type);
	createP(file.data); 
	
	if (file.type == "text"){
		createP(file.data);
	}
	else{
		createP("ERROR!!!!!!!!");
	}
	
}


function loadTXT(){
	
	loadStrings("sample4.txt", fileloaded);
}


function fileloaded(data){
	
	createP(join(data,"<br/>"));
	
	
}

