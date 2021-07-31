var searchInput = document.querySelector('#search-input');
var formatInput = document.querySelector('#format-input');
var searchButton = document.querySelector('#searchBtn');
var searchPage = './search-results.html';
var libraryURL = 'https://libraryofcongress.github.io/data-exploration/'

var changeWindows = (function() {

    if (!searchInput || formatInput.value === "") {
        alert("Please enter a valid search")
        return;
    }
    // var apiURL = searchPage + '/?q=' + searchInput.value + '&format=' + formatInput.value;
    window.location.replace(searchPage)
});

searchButton.addEventListener("click", changeWindows)