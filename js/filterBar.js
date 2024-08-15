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
    const selectFilter = document.createElement('select');
    selectFilter.id = 'filter-select';
    selectFilter.name = 'filter';
    selectFilter.appendChild(renderFilteringOption('Everywhere', 'everywhere'));
    selectFilter.appendChild(renderFilteringOption('Title', 'title'));
    selectFilter.appendChild(renderFilteringOption('Year', 'movie_year'));
    selectFilter.appendChild(renderFilteringOption('Director', 'director'));
    selectFilter.appendChild(renderFilteringOption('Actors', 'actors'));
    selectFilter.appendChild(renderFilteringOption('Description', 'description'));

    return selectFilter;
}

function handleFilterSelection() {
    const selectedFilter = document.querySelector('#filter-select').value;
    fetchAllMovies()
        .then(moviesList => {
            const filteredMovies = filterMovies(moviesList, selectedFilter);
            renderMovieCards(filteredMovies);
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
}

function renderFilteringOption(title, value) {
    const filterOption = document.createElement('option');
    filterOption.classList.add('filter-option');
    filterOption.value = value;
    filterOption.textContent = title;

    return filterOption;
}