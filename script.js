// API CALL

console.log(window.location);

// Get parameters and split them by separator '&'
var seachParams = window.location.search.split("&");

// Get the query
var queryParam = searchParams[0].split("=");
var query = queryParam[queryParam.length - 1];

// Get the format
var formatParam = searchParams[1].split("=");
var format = formatParam[formatParam.length - 1];

// Set requestUrl
requestUrl = 'https://www.loc.gov/search/?q=' + query + '&format=' + format + "&fo=json"; 

// Make request
fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        // Retrieve info and call display function
        var searchResults = data.results;
        for(var i = 0; i < searchResults.length; i++){
            var title = searchResults[i].title;
            var date = searchResults[i].date;
            var description = searchResults[i].description[0];
            var url = searchResults[i].url;

            console.log(title, description, date, url);
            displayInformation(title, date, description, url);
        }
    });
