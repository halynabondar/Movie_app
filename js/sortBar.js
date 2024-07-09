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

    nav.appendChild(sortWrapper);
    sortWrapper.appendChild(renderSortingPanelFieldset());

    return sortWrapper;
}

function renderSortingPanelFieldset() {
    const fieldset = document.createElement('fieldset');
    fieldset.classList.add('fieldset');
    fieldset.appendChild(renderSortingPanelLegend());
    fieldset.appendChild(renderSortingPanelBlockTitle());
    fieldset.appendChild(renderSortingPanelBlockYear());
    fieldset.appendChild(renderSortingPanelBlockPrice());

    return fieldset;
}

function renderSortingPanelLegend() {
    const legend = document.createElement('legend');
    legend.textContent = 'Sort by:';

    return legend;
}

function renderSortingPanelBlockTitle() {
    const sortBlockTitle = document.createElement('div');
    sortBlockTitle.classList.add('sort-block-title');
    sortBlockTitle.appendChild(renderSortingPanelInputTitle());
    sortBlockTitle.appendChild(renderSortingPanelTitleLabel());

    return sortBlockTitle;
}

function renderSortingPanelInputTitle() {
    const sortInputTitle = document.createElement('input');
    sortInputTitle.type = 'radio';
    sortInputTitle.classList.add('sort-title');
    sortInputTitle.id = 'sort-by-title'
    sortInputTitle.value = 'title';
    sortInputTitle.name = 'sort-radio';

    return sortInputTitle;
}

function renderSortingPanelTitleLabel() {
    const titleLabel = document.createElement('label');
    titleLabel.for = 'sort-by-title';
    titleLabel.textContent = 'Title';

    return titleLabel;
}

function renderSortingPanelBlockYear() {
    const sortBlockYear = document.createElement('div');
    sortBlockYear.classList.add('sort-block-year');
    sortBlockYear.appendChild(renderSortingPanelInputYear());
    sortBlockYear.appendChild(renderSortingPanelLabelYear());

    return sortBlockYear;
}

function renderSortingPanelInputYear() {
    const sortInputYear = document.createElement('input');
    sortInputYear.type = 'radio';
    sortInputYear.classList.add('sort-by-year');
    sortInputYear.value = 'year';
    sortInputYear.id = 'year';
    sortInputYear.name = 'sort-radio';

    return sortInputYear;
}

function renderSortingPanelLabelYear() {
    const yearLabel = document.createElement('label');
    yearLabel.for = 'sort-by-year';
    yearLabel.textContent = 'Year';

    return yearLabel;
}

function renderSortingPanelBlockPrice() {
    const sortBlockPrice = document.createElement('div');
    sortBlockPrice.classList.add('sort-block-year');
    sortBlockPrice.appendChild(renderSortingPanelInputPrice());
    sortBlockPrice.appendChild(renderSortingPanelLabelPrice());

    return sortBlockPrice;
}

function renderSortingPanelInputPrice() {
    const sortInputPrice = document.createElement('input');
    sortInputPrice.type = 'radio';
    sortInputPrice.classList.add('sort-by-price');
    sortInputPrice.value = 'price';
    sortInputPrice.id = 'price';
    sortInputPrice.name = 'sort-radio';

    return sortInputPrice;
}

function renderSortingPanelLabelPrice() {
    const priceLabel = document.createElement('label');
    priceLabel.for = 'sort-by-price';
    priceLabel.textContent = 'Price';

    return priceLabel;
}