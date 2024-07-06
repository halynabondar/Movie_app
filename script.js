const listOfMovies = [
    {
        id: 1,
        title: 'Inception',
        description:
            'A skilled thief, the absolute best in the dangerous art of extraction, steals valuable secrets from deep within the subconscious during the dream state, giving him a chance to have his criminal history erased.',
        movie_year: 2010,
        director: "Christopher Nolan",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy", "Ken Watanabe", "Marion Cotillard", "Cillian Murphy", "Tom Berenger", "Michael Caine"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
        price: '100.00',
    },
    {
        id: 2,
        title: 'The Shawshank Redemption',
        description:
            'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        movie_year: 1994,
        director: "Frank Darabont",
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown", "Gil Bellows", "James Whitmore"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        price: '80.00',
    },
    {
        id: 3,
        title: 'The Godfather',
        description:
            'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        movie_year: 1972,
        director: "Francis Ford Coppola",
        actors: ["Marlon Brando", "Al Pacino", "James Caan", "Richard S. Castellano", "Robert Duvall", "Sterling Hayden", "John Marley", "Richard Conte", "Diane Keaton"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        price: '90.00',
    },
    {
        id: 4,
        title: 'Pulp Fiction',
        description:
            'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        movie_year: 1994,
        director: "Quentin Tarantino",
        actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis", "Tim Roth", "Amanda Plummer", "Ving Rhames", "Eric Stoltz", "Rosanna Arquette"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
        price: '75.00',
    },
    {
        id: 5,
        title: 'The Dark Knight',
        description:
            'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        movie_year: 2008,
        director: "Christopher Nolan",
        actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Maggie Gyllenhaal", "Gary Oldman", "Morgan Freeman"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        price: '110.00',
    },
    {
        id: 6,
        title: 'Forrest Gump',
        description:
            'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
        movie_year: 1994,
        director: "Robert Zemeckis",
        actors: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Mykelti Williamson", "Sally Field", "Rebecca Williams", "Michael Conner Humphreys", "Harold G. Herthum"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
        price: '85.00',
    },
    {
        id: 7,
        title: 'Fight Club',
        description:
            'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.',
        movie_year: 1999,
        director: "David Fincher",
        actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter", "Meat Loaf", "Jared Leto", "Zach Grenier", "Holt McCallany", "Eion Bailey", "Richmond Arquette"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
        price: '70.00',
    },
    {
        id: 8,
        title: 'The Matrix',
        description:
            'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        movie_year: 1999,
        director: "Lana Wachowski, Lilly Wachowski",
        actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano", "Gloria Foster", "Marcus Chong", "Paul Goddard", "Robert Taylor"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        price: '95.00',
    },
    {
        id: 9,
        title: 'Schindler’s List',
        description:
            'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        movie_year: 1993,
        director: "Steven Spielberg",
        actors: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Caroline Goodall", "Jonathan Sagall", "Embeth Davidtz", "Malgorzata Gebel", "Mark Ivanir", "Beatrice Macola"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
        price: '90.00',
    },
    {
        id: 10,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        description:
            'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        movie_year: 2001,
        director: "Peter Jackson",
        actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom", "Sean Bean", "Sean Astin", "Cate Blanchett", "John Rhys-Davies", "Liv Tyler", "Billy Boyd"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
        price: '120.00',
    },
    {
        id: 11,
        title: 'The Silence of the Lambs',
        description:
            'A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help in catching another serial killer who skins his victims.',
        movie_year: 1991,
        director: "Jonathan Demme",
        actors: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney", "Kasi Lemmons", "Lawrence T. Wrentz", "Scott Glenn", "Anthony Heald", "Brooke Smith", "Diane Baker"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qjAy5xC8rm9dDdXk5aWxMRaCQ2Q.jpg',
        price: '75.00',
    },
    {
        id: 12,
        title: 'Gladiator',
        description:
            'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
        movie_year: 2000,
        director: "Ridley Scott",
        actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed", "Derek Jacobi", "Djimon Hounsou", "Richard Harris", "David Schofield", "John Shrapnel"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
        price: '85.00',
    },
    {
        id: 13,
        title: 'Saving Private Ryan',
        description:
            'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
        movie_year: 1998,
        director: "Steven Spielberg",
        actors: ["Tom Hanks", "Matt Damon", "Tom Sizemore", "Edward Burns", "Barry Pepper", "Adam Goldberg", "Vin Diesel", "Giovanni Ribisi", "Jeremy Davies"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1wY4psJ5NVEhCuOYROwLH2XExM2.jpg',
        price: '80.00',
    },
    {
        id: 14,
        title: 'The Green Mile',
        description:
            'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
        movie_year: 1999,
        director: "Frank Darabont",
        actors: ["Tom Hanks", "Michael Clarke Duncan", "David Morse", "Bonnie Hunt", "James Cromwell", "Michael Jeter", "Graham Greene", "Doug Hutchison", "Sam Rockwell"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
        price: '80.00',
    },
    {
        id: 15,
        title: 'The Lion King',
        description:
            'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
        movie_year: 1994,
        director: "Roger Allers, Rob Minkoff",
        actors: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones", "Whoopi Goldberg", "Moira Kelly", "Nathan Lane", "Ernie Sabella", "Rowan Atkinson", "Madge Sinclair"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6u1fYtxG5eqjhtCPDx04pJphQRW.jpg',
        price: '70.00',
    },
    {
        id: 16,
        title: 'Avatar',
        description:
            'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
        movie_year: 2009,
        director: "James Cameron",
        actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang", "Michelle Rodriguez", "Giovanni Ribisi", "Joel David Moore", "CCH Pounder", "Wes Studi"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg',
        price: '110.00',
    },
    {
        id: 17,
        title: 'Titanic',
        description:
            'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
        movie_year: 1997,
        director: "James Cameron",
        actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates", "Frances Fisher", "Danny Nucci", "Bill Paxton", "David Warner", "Jonathan Hyde"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kHXEpyfl6zqn8a6YuozZUujufXf.jpg',
        price: '105.00',
    },
    {
        id: 18,
        title: 'Jurassic Park',
        description:
            'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park\'s cloned dinosaurs to run loose.',
        movie_year: 1993,
        director: "Steven Spielberg",
        actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough", "Bob Peck", "Martin Ferrero", "BD Wong", "Joseph Mazzello", "Ariana Richards"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9i3plLl89DHMz7mahksDaAo7HIS.jpg',
        price: '90.00',
    },
    {
        id: 19,
        title: 'Braveheart',
        description:
            'Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.',
        movie_year: 1995,
        director: "Mel Gibson",
        actors: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan", "Angus Macfadyen", "Brendan Gleeson", "Catherine McCormack", "James Cosmo", "David O'Hara", "Peter Hanly"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or1gBugydmjToAEq7OZY0owwFk.jpg',
        price: '85.00',
    },
    {
        id: 20,
        title: 'The Terminator',
        description:
            'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity\'s future salvation.',
        movie_year: 1984,
        director: "James Cameron",
        actors: ["Arnold Schwarzenegger", "Linda Hamilton", "Michael Biehn", "Paul Winfield", "Lance Henriksen", "Rick Rossovich", "Bess Motta", "Earl Boen", "Bill Paxton"],
        poster_url:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q8ffBuxQlYOHrvPniLgCbmKK4Lv.jpg',
        price: '80.00',
    },
];

function renderFilmCard(film){
    // create htmlElement
    const card = document.createElement('div');
    card.classList.add('card', 'film-card');
    // render main section
    card.appendChild(renderFilmMainCardSection(film));
    // render description section
    card.appendChild(renderFilmDescriptionSection(film.description));
    // render comments section
    card.appendChild(renderCommentsSection(film.comments || []));
    // render comment form section
    card.appendChild(renderCommentForm());
    return card;
}

function renderFilmMainCardSection(film){
    // render section wrapper
    const mainSectionWrapper = document.createElement('div');
    mainSectionWrapper.classList.add('card-section', 'film-main-section');
    // render thumbnail
    mainSectionWrapper.appendChild(renderCardThumbnail(film.poster_url));
    // render info column
    mainSectionWrapper.appendChild(renderCardInfo(film));

    return mainSectionWrapper;
}

function renderCardThumbnail(imageURL){
    // add column wrapper
    const thumbnailWrapper = document.createElement('div');
    thumbnailWrapper.classList.add('section-column', 'film-poster');
    // add image
    const image = document.createElement('img');
    image.src = imageURL;
    thumbnailWrapper.appendChild(image);

    return thumbnailWrapper;
}

function renderCardInfo(film) {
    // Add column wrapper
    const infoWrapper = document.createElement('div');
    infoWrapper.classList.add('section-column', 'film-info');

    // Render title
    infoWrapper.appendChild(renderTitle(film.title));
    // Render year
    infoWrapper.appendChild(renderYear(film.movie_year));
    // Render director
    infoWrapper.appendChild(renderDirector(film.director));
    // Render actors
    infoWrapper.appendChild(renderActors(film.actors));
    // Render price
    infoWrapper.appendChild(renderPrice(film.price));

    return infoWrapper;
}


function renderTitle(title){
    const titleElement = document.createElement('div');
    titleElement.textContent = title;
    titleElement.classList.add('film-info-line', 'film-title');
    return titleElement;
}
function renderYear(year) {
    const yearElement = document.createElement('div');
    yearElement.innerHTML = `<span>Year</span>: ${year}`;
    yearElement.classList.add('film-info-line', 'film-year');
    return yearElement;
}

function renderDirector(director) {
    const directorElement = document.createElement('div');
    directorElement.innerHTML = `<span>Director</span>: ${director}`;
    directorElement.classList.add('film-info-line', 'film-director');
    return directorElement;
}

function renderActors(actors) {
    const actorsElement = document.createElement('div');
    actorsElement.innerHTML = `<span>Actors</span>: ${actors.join(', ')}`;
    actorsElement.classList.add('film-info-line', 'film-actors');
    return actorsElement;
}

function renderPrice(price) {
    const priceElement = document.createElement('div');
    priceElement.innerHTML = `<span>Price</span>: $${price}`;
    priceElement.classList.add('film-info-line', 'film-price');
    return priceElement;
}


function renderFilmDescriptionSection(description){
    const descriptionSection = document.createElement('div');
    descriptionSection.classList.add('card-section', 'film-description-section');
    descriptionSection.textContent = description;
    return descriptionSection;
}

function renderCommentsSection(comments){
    const commentsSection = document.createElement('div');
    commentsSection.classList.add('card-section', 'film-comments-section');
    // render comments subtitle
    commentsSection.appendChild(renderSectionTitle('Comments:'))
    // render comments wrapper
    commentsSection.appendChild(renderCommentsWrapper(comments || []));
    return commentsSection;
}

function renderCommentsWrapper(comments) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('comments-wrapper');
    wrapper.id = "comments-list";

    comments.forEach(comment => {
        appendComment(comment);
    });

    return wrapper;
}

function appendComment(comment){
    const commentWrapper = document.createElement('div');
    commentWrapper.classList.add('comment-wrapper');
    // Render comment meta column
    commentWrapper.appendChild(renderCommentMeta(comment));

    // Render comment data column
    commentWrapper.appendChild(renderCommentData(comment.message));

    const commentsContainer = document.getElementById('comments-list');
    commentsContainer.appendChild(commentWrapper);
}

function renderCommentMeta(comment) {
    const metaWrapper = document.createElement('div');
    metaWrapper.classList.add('comment-meta-wrapper');

    // Render user row
    metaWrapper.appendChild(commentUserRow(comment.username));

    // Render time row
    metaWrapper.appendChild(commentTimeRow(comment.timestamp));

    return metaWrapper;
}

function commentUserRow(author) {
    const userRow = document.createElement('div');
    userRow.classList.add('comment-user-row');
    userRow.innerHTML = `<span>Author:</span><br> ${author}`;
    return userRow;
}

function commentTimeRow(timestamp) {
    const timeRow = document.createElement('div');
    timeRow.classList.add('comment-time-row');
    timeRow.innerHTML = `<span>Posted on:</span><br> ${new Date(timestamp).toLocaleString()}`;
    return timeRow;
}


function renderCommentData(commentText) {
    const dataWrapper = document.createElement('div');
    dataWrapper.classList.add('comment-data-wrapper');
    dataWrapper.textContent = commentText;
    return dataWrapper;
}


function renderCommentForm(){
    const newCommentSection = document.createElement('div');
    newCommentSection.classList.add('card-section', 'film-new-comment-section');
    // render add new comment subtitle
    newCommentSection.appendChild(renderSectionTitle('Add new comment:'))
    // render form
    // Render comment form
    const commentForm = renderCommentFormElement();
    newCommentSection.appendChild(commentForm);

    // Handle form submission
    commentForm.addEventListener('submit', handleFormSubmit);
    return newCommentSection;
}

function renderCommentFormElement() {
    const formElement = document.createElement('form');
    formElement.classList.add('comment-form');

    // Append username input
    formElement.appendChild(renderUsernameInput());

    // Append message textarea
    formElement.appendChild(renderMessageTextarea());

    // Append submit button
    formElement.appendChild(renderSubmitButton());

    return formElement;
}

function renderUsernameInput() {
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Write your name here...';
    usernameInput.required = true;
    return usernameInput;
}

function renderMessageTextarea() {
    const messageTextarea = document.createElement('textarea');
    messageTextarea.name = 'message';
    messageTextarea.placeholder = 'Write your comment here...';
    messageTextarea.required = true;
    return messageTextarea;
}

function renderSubmitButton() {
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add comment';
    return submitButton;
}

function renderSectionTitle(title) {
    const sectionTitleElement = document.createElement('div');
    sectionTitleElement.textContent = title;
    sectionTitleElement.classList.add('section-title');
    return sectionTitleElement;
}

function handleFormSubmit(event) {
    event.preventDefault();

    // Collect form data using FormData
    const formData = new FormData(event.target);
    // convert formData into Comments structure(object)
    const comment = {
        username: formData.get('username'),
        message: formData.get('message'),
        timestamp: new Date().toISOString() // Generate timestamp
    }
    appendComment(comment);
}

const main = document.querySelector('#main');
const randMovieIndex = Math.floor(Math.random() * listOfMovies.length);
const randomMovie = listOfMovies[randMovieIndex];
main.appendChild(renderFilmCard(randomMovie));
