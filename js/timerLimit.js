function timerLimitRender() {
    console.log(1)
    const nav = document.getElementById("nav");
    const timerLimit = document.createElement('div');
    timerLimit.id = 'timer-limit';
    nav.appendChild(timerLimit);
    timerLimit.appendChild(renderLimitLabel());
    timerLimit.appendChild(renderLimitDropdown());

    return timerLimit;
}

function renderLimitLabel() {
    const limitLabel = document.createElement('label');
    limitLabel.classList.add('limit-label');
    limitLabel.textContent = 'Set a time!';

    return limitLabel;
}

function renderLimitDropdown() {
    const limitSelect = document.createElement('select');
    limitSelect.id = 'limit-select';

    limitSelect.appendChild(renderLimitOption('Select a time...'));
    limitSelect.appendChild(renderLimitOption('1 minute', '1'));
    limitSelect.appendChild(renderLimitOption('5 minutes', '5'));
    limitSelect.appendChild(renderLimitOption('10 minutes', '10'));

    limitSelect.onchange = timerDropdownHandler;

    return limitSelect;
}

function renderLimitOption(title, value) {
    const limitOption = document.createElement('option');
    limitOption.classList.add('limit-option');
    limitOption.value = value;
    limitOption.textContent = title;

    return limitOption;
}

function timerTimeoutHandler(){
    const minutes = parseInt(document.querySelector('#limit-select').value);
    const message = `You ware already picking movie for ${minutes} minutes! Would you like to review timer?`;
    if (confirm(message)){
        timerDropdownHandler();
    }
}

function timerDropdownHandler(){
    const minutes = parseInt(document.querySelector('#limit-select').value);
    const milliseconds = minutes * 60 *1000;
    setTimeout(timerTimeoutHandler, milliseconds);


}