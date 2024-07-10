function renderFilmCard(film) {
    // create htmlElement
    const card = document.createElement('div');
    card.classList.add('card', 'film-card');
    // render title section
    card.appendChild(renderStarRating(film));
    card.appendChild(renderTitleSection(film.title));
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

// Render rating
function renderStarRating(film) {
    const filmRating = document.createElement('div');
    filmRating.classList.add('film-rating');

    for (let i = 0; i < 5; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('fa-regular', 'fa-star');
        filmRating.appendChild(starIcon);

        filmRating.addEventListener('click', () => {
            film.rating = i + 1;
            updateStars(filmRating, film.rating);
        });
    }

    updateStars(filmRating, film.rating || 0);

    return filmRating;
}

// Update star rating
function updateStars(ratingContainer, rating) {
    const stars = ratingContainer.querySelectorAll('.film-rating i');
    stars.forEach((star, index) => {
        star.classList.toggle('fa-solid', index < rating);
        star.classList.toggle('fa-regular', index >= rating);
    });
}

function renderTitleSection(title) {
    const titleSectionWrapper = document.createElement('div');
    titleSectionWrapper.classList.add('card-section', 'film-title-section');

    // Render title
    titleSectionWrapper.appendChild(renderTitle(title));
    return titleSectionWrapper;
}


function renderFilmMainCardSection(film) {
    // render section wrapper
    const mainSectionWrapper = document.createElement('div');
    mainSectionWrapper.classList.add('card-section', 'film-main-section');
    // render thumbnail
    mainSectionWrapper.appendChild(renderCardThumbnail(film.poster_url));
    // render info column
    mainSectionWrapper.appendChild(renderCardInfo(film));

    return mainSectionWrapper;
}

function renderCardThumbnail(imageURL) {
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


function renderTitle(title) {
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


function renderFilmDescriptionSection(description) {
    const descriptionSection = document.createElement('div');
    descriptionSection.classList.add('card-section', 'film-description-section');
    descriptionSection.textContent = description;
    return descriptionSection;
}

function renderCommentsSection(comments) {
    const commentsSection = document.createElement('div');
    commentsSection.classList.add('card-section', 'film-comments-section');
    // render comments subtitle
    commentsSection.appendChild(renderSectionTitle('Comments'))
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

function appendComment(comment) {
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


function renderCommentForm() {
    const newCommentSection = document.createElement('div');
    newCommentSection.classList.add('card-section', 'film-new-comment-section');
    // render add new comment subtitle
    newCommentSection.appendChild(renderSectionTitle('Add new comment'))
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
    submitButton.classList.add('submit')
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

function renderMovieCards(movies) {
    const main = document.querySelector('#main');
    main.innerHTML = ''; //clear content
    movies.forEach(movie => main.appendChild(renderFilmCard(movie)));
}