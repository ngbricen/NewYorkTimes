var authKey = "2b4651d960804b78b84df443fd1f236b"

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

var searchPhrase = "";

var numberResults = 0;
var startYear = 0;
var endYear = 0;


  $("#run-search").on("click", function(event) {

  	event.preventDefault()

  	console.log($("#search-term").val());

  	searchPhrase = $("#search-term").val();
  	startYear =  $("#start-year").val() + "0101"
  	endYear =  $("#end-year").val() + "1231"

  	queryURL = queryURL + searchPhrase;

  	if (startYear != ""){
  		queryURL = queryURL + "&begin_date=" + startYear;
  	}


  	if (endYear != ""){
  		queryURL = queryURL + "&end_date=" + endYear;
  	}

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response);

	});
});
