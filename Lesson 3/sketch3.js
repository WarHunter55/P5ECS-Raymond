var textfield ; {

/*
-indexOf()
-substring()
-lenght()
-split
-join
*/

function setup(){

 noCanvas();

 // textfield=createInput("Username");
 textfield = select('#storyfield');
 output= select('#output');


 //Submit Button Setup
 submit = select('#submit');
 submit.mousePressed(instancechecker);
}

function newTyping(){

 var s = textfield.value();
 createP("The Lenght of your story is " +s.length + " characters");
 s.indexOf("e");
 createP(s.indexOf("e"));


 var wordsearch = "puppy";
 var theword = s.indexOf(wordsearch);
 createP("You can find the word " + wordsearch + " starting at " + theword);


 createP(s.indexOf("e",6));


 var newtxt = s.substring(8,11);
 createP(newtxt);



 var newertxt = s.substring(s.length/2, s.length);
 createP(newertxt);


 var splitstory = split(s, " ");
 splitstory = splitstory.sort();
 s = join (splitstory, " ");
 createP(s);

}

function tweetchecker(){

 var s = textfield.value
 if (s.length < 141){
  createP(s);
}else {

  createP("Your message is to long"); 

}


}

function instancechecker() {

  var s = textfield.value();
  var wordsearch = "puppy";
  var index = s.indexOf(wordsearch);
  var fail = -1;
  for (var i =0; i< s.lenght; i++);{
	  var index = s.indexOf(wordsearch);
  if (index > fail){
	  
	  createP("You can find thie word' " +wordsearch + "' at index: " +index);
	  fail = index;
  }
  }