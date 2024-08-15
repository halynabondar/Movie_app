renderSearchMoviesForm();
addSearchMoviesHandler();
timerLimitRender();
renderSortingPanel();
renderOnSiteCounterBar();
renderFilterPanel();

fetchAllMovies()
    .then(listOfMovies => renderMovieCards(listOfMovies));