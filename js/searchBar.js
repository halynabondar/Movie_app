// Search form
function renderSearchMoviesForm() {
    //render search form
    const nav = document.getElementById('nav');
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

function searchMovie(keyword) {
    const lowerCaseKeyword = keyword.toLowerCase().trim();
    return listOfMovies.filter(movie =>
        movie.title.toLowerCase().includes(lowerCaseKeyword)
    );
}

function addSearchMoviesHandler() {
    const searchButton = document.querySelector('.search-btn');
    searchButton.addEventListener("click", (event) => {
        event.preventDefault();
        const searchInput = document.querySelector('.search-input');
        const keyword = searchInput.value.trim();
        const searchResults = searchMovie(keyword);
        renderMovieCards(searchResults);
    })
}