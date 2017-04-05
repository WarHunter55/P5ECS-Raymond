console.log("Hello ECS");

var express = require('express');
var app = express();

var server = app.listen(3000, listening);

function listening(){
	
	console.log("listening...");
	
}





app.use(express.static('website'));
//http://pokedexapi.com/about
//http://pokedexapi.com/search/pikachu


app.get('/pikachu', sendPikachu);

function sendPikachu(request, response){
	
	response.send('Pikachu is cool, I guess...');
}

//search/pikachu

app.get('/ulove/:pokemon', sendPokemon);
function sendPokemon(request, response){
	var data = request.params;
	
	var reply = "I love " +data.pokemon + " ,too!!!";
	
	response.send(reply);
}

var pokedex = {
	
	"pikachu": 25,
	"bulbasaur": 1,
	"mewtwo": 150,
	"charmander": 4
	
}

app.get('/all', sendAll);
function sendAll(request, response){
	response.send(pokedex);
	
}

app.get('/add/:pokemon/:num?', addPokemon);
function addPokemon(request, response){
	
	var data = request.params;
	var pokemon = data.pokemon;
	var num = Number(data.num);
	
	var reply;
	
	if (!num) {
	reply = {
	msg: "BOI YOU FORGOT THE NUMBER, ARE YOU DUMB OR SOMETHING. YA DUM DUM!!!"
	}}else{
	pokedex[pokemon] = num;
	reply = {
		msg: "Um this pokemon has already been discovered. Go away."
	}}
	response.send(reply);
	
}

app.get('/search/:pokemon', searchPokemon);
function searchPokemon(request, response){
	
	var data = request.params;
	var pokemon = data.pokemon;
	var reply;
	
	if(pokedex[pokemon]){
		reply = {
			status: "found",
			pokemon: pokemon,
			dexnum: pokedex[pokemon]
	}}else{
		reply = {
			status: "not found",
			pokemon: pokemon
		}
		
		
	}
	response.send(reply);
}


app.get('/whosthatpokemon', sayHello);
function sayHello(request, response){
	var name = request.query.n;
	var level = request.query.l;
	response.send("It's a level " + level + " "+ name + "!");
	
}