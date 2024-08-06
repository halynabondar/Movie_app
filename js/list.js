function fetchAllMovies(callback) {
    fetch("https://raw.githubusercontent.com/halynabondar/halynabondar.github.io/main/Data/movieApp.json")
        .then(response => {
            response.json().then(moviesList => {
                callback(moviesList);
            })
        })
}