var authKey = "2b4651d960804b78b84df443fd1f236b"

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

var searchPhrase = "";
var numberResults = 0;
var startYear = 0;
var endYear = 0;

$.ajax({
	url: queryURL,
	method: "GET"
}).done(function)
