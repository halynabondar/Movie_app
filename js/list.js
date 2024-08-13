async function fetchAllMovies() {
    let data = [];
    try {
        const response = await fetch("https://raw.githubusercontent.com/halynabondar/halynabondar.github.io/main/Data/movieApp.json");
        data = await response.json();
        console.log(data)
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
    return data;
}
//
// function fetchAllMovies() {
//     return fetch("https://raw.githubusercontent.com/halynabondar/halynabondar.github.io/main/Data/movieApp.json")
//         .then((response) => {
//             return response.json();
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//         });
// }