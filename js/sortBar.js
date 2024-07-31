// Sort movie

function addSortMoviesHandler() {
    const sortedByTitle = listOfMovies.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    })
    const sortedByPrice = listOfMovies.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    const sortedByYear = listOfMovies.sort((a, b) => a.movie_year - b.movie_year);

    console.log(sortedByTitle);
    console.log(sortedByPrice);
    console.log(sortedByYear);
}

// Sorting panel

function renderSortingPanel() {
    const nav = document.getElementById('nav');
    const sortWrapper = document.createElement('div');
    sortWrapper.classList.add('sort-panel');
    nav.classList.add('container');
    nav.appendChild(sortWrapper);
    sortWrapper.appendChild(renderSortingLabel());
    sortWrapper.appendChild(renderSortingDropdown());

    return sortWrapper;
}

function renderSortingLabel() {
    const label = document.createElement('label');
    label.textContent = 'Sort by:';

    return label;
}

function renderSortingDropdown() {
    const select = document.createElement('select');
    select.id = 'sort-select';
    select.appendChild(renderSortingOption('Select something...'));
    select.appendChild(renderSortingOption('Title', 'title'));
    select.appendChild(renderSortingOption('Year', 'movie_year'));
    select.appendChild(renderSortingOption('Price', 'price'));

    select.onchange = handleSortSelection;

    return select;
}

function handleSortSelection(){
    currentMoviesList = sortMovies();
    renderMovieCards(currentMoviesList);
}

function sortMovies() {
    const sortingRule = document.querySelector('#sort-select').value;

    switch (sortingRule) {
        case 'title':
            return sortByTitle();
        case 'movie_year':
            return sortByYear();
        case 'price':
            return sortByPrice();
        default:
            return currentMoviesList;
    }
}
function sortByTitle(){
    return currentMoviesList.sort((a,b) => {
        const titleA = a.title.toUpperCase(); // ignore upper and lowercase
        const titleB = b.title.toUpperCase(); // ignore upper and lowercase
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
}

function sortByPrice(){
    return currentMoviesList.sort((a,b) => {
        const priceA = a.price;
        const priceB = b.price;
        return priceA - priceB;
    });
}

function sortByYear(){
    return currentMoviesList.sort((a,b) => {
        const yearA = a.movie_year;
        const yearB = b.movie_year;
        return yearA - yearB;
    });
}

function renderSortingOption(title, value) {
    const option = document.createElement('option');
    option.classList.add('sort-option');
    option.value = value;
    option.textContent = title;

    return option;
}

