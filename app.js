// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const nameButton = document.getElementById('name-button');
const nameInput = document.getElementById('add-name');
const nameDisplay = document.getElementById('nameDisplayed');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
// set state for all of the character's catchphrases
let catchPhrases = [];
let characterNames = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const value = headDropdown.value;
    // increment the head change count state
    headCount++;
    // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const value = middleDropdown.value;
    // increment the middle change count state
    middleCount++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const value = bottomDropdown.value;
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const value = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchPhrases.push(value);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
    //hide the button again so you cannot move forward without inputting
    catchphraseButton.classList.add('hidden');
});

catchphraseInput.addEventListener('input', () => {
    catchphraseButton.classList.remove('hidden');
});

nameButton.addEventListener('click', () => {
    const value = nameInput.value;
    characterNames.push(value);
    nameInput.value = '';
    displayName();
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You have changed the head ${headCount} times!
    you have also changed the middle ${middleCount} times! Finally, you have
    changed the bottom ${bottomCount} times!`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let catchPhrase of catchPhrases) {
    // for each catchphrase create an HTML element with the catchphrase as its text content
        const pTag = document.createElement('p');
    // and append that HTML element to the cleared-out DOM
        catchphrasesEl.append(pTag);

        pTag.textContent = catchPhrase;
        pTag.classList.add('catchphraseAdded');
    }
    if (catchPhrases.length >= 4) {
        catchPhrases.shift();
    }
}

function displayName() {
    nameDisplay.textContent = '';
    for (let characterName of characterNames) {
        const h2Tag = document.createElement('h2');
        nameDisplay.append(h2Tag);

        h2Tag.textContent = characterName;
        h2Tag.classList.add('bigName');
    }
    characterNames.pop();
}

//stretch goal #2 create arrays for head, middle and bottom
let headArr = [{ display: 'Duck Head', value: '1' }, { display: 'Bird Head', value: '2' }, 
    { display: 'Horse Head', value: '3' }, { display: 'Dog Head', value: '4' }];
let middleArr = [{ display: 'Blue shirt', value: 'blue' }, { display: 'Dress', value: 'dress' }, 
    { display: 'Red Shirt', value: 'red' }, { display: 'Pink shirt', value: 'pink' }];
let bottomArr = [{ display: 'Blue jeans', value: 'blue' }, { display: 'White Pants', value: 'white' }, 
    { display: 'just a leg', value: 'leg' }];

function createDropdown(){
    for (let head of headArr){
        const option = document.createElement('option');
        headDropdown.append(option);
        option.textContent = head.display;
        option.value = head.value;
    }
    for (let middle of middleArr){
        const option = document.createElement('option');
        middleDropdown.append(option);
        option.textContent = middle.display;
        option.value = middle.value;
    }
    for (let bottom of bottomArr){
        const option = document.createElement('option');
        bottomDropdown.append(option);
        option.textContent = bottom.display;
        option.value = bottom.value;
    }
}

createDropdown();