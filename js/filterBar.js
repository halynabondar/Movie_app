function renderFilterPanel() {
    const nav = document.getElementById('search');

    if (!nav) {
        console.error('Element with ID "search" not found.');
        return null;
    }

    const filterWrapper = document.createElement('div');
    filterWrapper.classList.add('filter-panel');

    nav.appendChild(filterWrapper);
    filterWrapper.appendChild(renderFilteringLabel());
    filterWrapper.appendChild(renderFilteringDropdown());

    return filterWrapper;
}

function renderFilteringLabel() {
    const labelFilter = document.createElement('label');
    labelFilter.textContent = 'Filter by:';

    return labelFilter;
}

function renderFilteringDropdown() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const selectFilter = document.createElement('select');
    selectFilter.id = 'filter-select';
    selectFilter.name = 'filter';
    selectFilter.appendChild(renderFilteringOption('Show all', '{}'));
    selectFilter.appendChild(renderFilteringOption('New', `{"field": "movie_year", "condition": ">=", "value": ${currentYear}}`));
    selectFilter.appendChild(renderFilteringOption('Modern', `{"field": "movie_year", "condition": ">=", "value": 2010 }`));
    selectFilter.appendChild(renderFilteringOption('Retro', `{"field": "movie_year", "condition": "<", "value": 1980 }`));
    selectFilter.appendChild(renderFilteringOption('Cheap', `{"field": "price", "condition": "<", "value": 80 }`));
    selectFilter.appendChild(renderFilteringOption('Expensive', `{"field": "price", "condition": ">", "value": 100 }`));

    selectFilter.onchange = handleFilterSelection;

    return selectFilter;
}

function handleFilterSelection() {
    fetchAllMovies()
        .then(moviesList => renderMovies(moviesList))
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
}

function filterMoviesByFilter(moviesList){
    const constrainString = document.querySelector('#filter-select').value;
    const constrain = JSON.parse(constrainString);
    if (! constrain.field) return  moviesList;

    return moviesList.filter(movie => {
        return eval(`movie[constrain.field] ${constrain.condition} constrain.value` )
    })

}

function renderFilteringOption(title, value) {
    const filterOption = document.createElement('option');
    filterOption.classList.add('filter-option');
    filterOption.value = value;
    filterOption.textContent = title;

    return filterOption;
}