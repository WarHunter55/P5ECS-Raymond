var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apikey = "?api-key=6f7b8b1e95104785894547717a12e0ee";
var begindate = "&begin_date=";
var enddate = "&end_date=";
var query = "&q="

//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=6f7b8b1e95104785894547717a12e0ee&q=instagram

var search;
var begin;
var end;
var submit;

function setup(){
	noCanvas();

	search = select('#search');
	begin = select('#begin');
	end = select('#end');
	
	submit = select('#submit');
	
	submit.mousePressed(findArticles);




}

function findArticles(){
	
	var s = search.value();
	var b = begin.value();
	var e = end.value();
s
	loadJSON(url+apikey+query+s+begindate+b+enddate+e, gotData);
}


function gotData(data){	
	console.log(data);
	var articles = data.response.docs;
	for(var i = 0; i<articles.length; i++){	
		createElement('h1', articles[i].headline.main);
		createP(articles[i].snippet);						   
	}
}
