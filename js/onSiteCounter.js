const userJoined = new Date();
function renderOnSiteCounterBar(){
    const nav = document.getElementById('nav');

    const onSiteBar = document.createElement('div');

    onSiteBar.classList.add('on-site-panel');
    onSiteBar.appendChild(renderOnSiteLabel());
    onSiteBar.appendChild(renderOnSiteValue());

    nav.appendChild(onSiteBar);

    setInterval(updateUserOnSite, 1000); // Set the interval to update the on-site time every second
}

function renderOnSiteLabel(){
    const label = document.createElement('span');
    label.textContent = 'User on site:';
    label.id = 'user-on-site-label'

    return label;
}

function renderOnSiteValue(){
    const value = document.createElement('span');
    value.id = 'user-on-site';
    value.textContent = '00:00:00';
    setInterval(updateUserOnSite, 1000);

    return value;
}
function updateUserOnSite(){
    const now = new Date();
    const userOnSite = Math.floor((now - userJoined) / 1000);
    const newTimeString = new Date(userOnSite * 1000).toISOString().substring(11, 19);

    const onSiteValueElement = document.querySelector('#user-on-site');
    onSiteValueElement.textContent = newTimeString;
}