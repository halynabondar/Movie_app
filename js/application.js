renderSearchMoviesForm();
addSearchMoviesHandler();
timerLimitRender();
renderSortingPanel();
renderOnSiteCounterBar();

fetchAllMovies()
    .then(listOfMovies => renderMovieCards(listOfMovies));