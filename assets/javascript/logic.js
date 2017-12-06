var search = "";
var key = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
var URL = "https://api.giphy.com/v1/gifs/search?api_key="
var queryURL = URL + key + "&q=" + searchInput + "&limit=" + numRecords + "&offset=0&rating=G&lang=en";
$("#img-row").text("");
	$.ajax({
	url: queryURL,
	method: "GET",
}).done(function (response) {
    
    
});



/*

var searchInput = str
var numRecords = num
var startYr = num
var endYr = num

 59a6da904e9548caa79d6f29dce2f7b8

*/