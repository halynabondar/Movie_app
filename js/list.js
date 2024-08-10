function fetchAllMovies(callback) {
    fetch("https://raw.githubusercontent.com/halynabondar/halynabondar.github.io/main/Data/movieApp.json")
        .then((response) => {
            return response.json();
        })
        .then((moviesList) => {
            callback(moviesList);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}