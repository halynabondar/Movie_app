async function fetchAllMovies() {
    let data = [];
    try {
        const response = await fetch("https://raw.githubusercontent.com/halynabondar/halynabondar.github.io/main/Data/movieApp.json");
        data = await response.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
    return data;
}

function renderMovies(moviesList){
    const searchResults = filterMoviesBySearchCriteria(moviesList);

    const filteredResults = filterMoviesByFilter(searchResults);
    if (filteredResults.length === 0) {
        displayNoResultsMessage();
    } else {
        sortMovies(filteredResults);
        renderMovieCards(filteredResults);
    }
}