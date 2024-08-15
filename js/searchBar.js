// Search form
function renderSearchMoviesForm() {
    //render search form
    const nav = document.getElementById('search');
    const searchBar = document.createElement('div');
    searchBar.id = 'search-bar';
    const form = document.createElement('form');
    form.classList.add('form');
    form.appendChild(renderSearchMoviesFormInput());
    form.appendChild(renderSearchMoviesFormButton());
    nav.appendChild(searchBar);
    searchBar.appendChild(form);
}

function renderSearchMoviesFormInput() {
    //render search form input
    const input = document.createElement('input');
    input.classList.add('input', 'search-input');
    input.type = 'search';
    input.required = true;
    input.placeholder = 'Start typing to search...';

    return input;
}

function renderSearchMoviesFormButton() {
    //render search form button
    const searchButton = document.createElement('button');
    searchButton.type = "submit";
    searchButton.textContent = "Search";
    searchButton.classList.add('btn', 'search-btn');

    return searchButton;
}

function searchMovie() {
    fetchAllMovies().then(moviesList => renderMovies(moviesList));
}
function getSearchQuery(){
    const searchInput = document.querySelector('.search-input');
    const searchInputValue = searchInput.value
    if (searchInputValue === '') return undefined;

    return  parseSearchQuery(searchInputValue.trim());
}
function filterMoviesBySearchCriteria(moviesList){
    const searchQuery = getSearchQuery();
    if (! searchQuery) return moviesList;

    const lowerCaseValue = searchQuery.value.toLowerCase().trim();

    return moviesList.filter(movie => {
            if (searchQuery.field === 'everywhere') {
                return movie.title.toLowerCase().includes(lowerCaseValue) ||
                    movie.description.toLowerCase().includes(lowerCaseValue) ||
                    movie.movie_year.toString().toLowerCase().includes(lowerCaseValue) ||
                    movie.director.toLowerCase().includes(lowerCaseValue) ||
                    movie.actors.toString().toLowerCase().includes(lowerCaseValue);
            } else {
                return movie[searchQuery.field].toString().toLowerCase().includes(lowerCaseValue);
            }

        }

    );
}

function addSearchMoviesHandler() {
    const searchForm = document.querySelector('#search-bar form');
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        searchMovie();
    });
}

function parseSearchQuery(inputString){
    let field = 'everywhere';
    let value = inputString.toLowerCase();
    if (value.indexOf('title:') === 0 ||
        value.indexOf('description:') === 0 ||
        value.indexOf('director:') === 0 ||
        value.indexOf('actors:') === 0) {
        const items = value.split(':', 2);
        field = items[0];
        value = items[1];
    }
    return {field: field, value: value}
}

function displayNoResultsMessage(){
    const resultsContainer = document.getElementById('main'); // Adjust the selector to your actual results container
    resultsContainer.innerHTML = '<p>No movies found.</p>';
}