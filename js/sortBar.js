function renderSortingPanel() {
    const nav = document.getElementById('sort');
    const sortWrapper = document.createElement('div');
    sortWrapper.classList.add('sort-panel');
    nav.appendChild(sortWrapper);
    sortWrapper.appendChild(renderSortingLabel());
    sortWrapper.appendChild(renderSortingDropdown());

    return sortWrapper;
}

function renderSortingLabel() {
    const labelSort = document.createElement('label');
    labelSort.textContent = 'Sort by:';

    return labelSort;
}

function renderSortingDropdown() {
    const select = document.createElement('select');
    select.id = 'sort-select';
    select.appendChild(renderSortingOption('...'));
    select.appendChild(renderSortingOption('Title', 'title'));
    select.appendChild(renderSortingOption('Year', 'movie_year'));
    select.appendChild(renderSortingOption('Price', 'price'));

    select.onchange = handleSortSelection;

    return select;
}

function handleSortSelection(){
    fetchAllMovies()
        .then(moviesList => {
            sortMovies(moviesList);
            renderMovieCards(moviesList);
        });

}

function sortMovies(moviesList) {
    const sortingRule = document.querySelector('#sort-select').value;

    switch (sortingRule) {
        case 'title':
            return sortByTitle(moviesList);
        case 'movie_year':
            return sortByYear(moviesList);
        case 'price':
            return sortByPrice(moviesList);
        default:
            return moviesList;
    }
}
function sortByTitle(moviesList){
    return moviesList.sort((a,b) => {
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

function sortByPrice(moviesList){
    return moviesList.sort((a,b) => {
        const priceA = a.price;
        const priceB = b.price;
        return priceA - priceB;
    });
}

function sortByYear(moviesList){
    return moviesList.sort((a,b) => {
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