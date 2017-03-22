var textfield;

function setup(){
	
	// textfield=createInput("Username");
	
	textfield = select('#storyfield');
	
	textfield.input(newTyping);
	
	textfield.changed(newText);
	
	output = select('#output');
	
	//Submit Button Setup
	submit = select('#submit');
	submit.mousePressed(drawThis);
}


function drawThis (){
	
	ellipse (50, 50, 100, 100);

}


function newTyping(){
	
	//createP(textfield.value());
	output.html(textfield.value());
	
}

function newText (){
	createP(textfield.value());
}