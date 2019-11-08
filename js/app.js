const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');

//Phrases that the game will use 
const phrases = [
    "A GAME OF CAT AND MOUSE",
    "A ONCE IN A LIFETIME OPPORTUNITY",
    "FALL IN LOVE WITH THIS CITY",
    "I SEE WHERE THIS IS GOING",
    "MY HEAD IS IN THE CLOUDS",
    "ON YOUR MARK GET SET GO",
    "OUT OF SIGHT OUT OF MIND",
    "ROSES ARE RED VIOLETS ARE BLUE",
    "SOME THINGS ARE BETTER LEFT UNSAID",
    "TAKE THE BULL BY THE HORNS"
];

// Missed is the life counter 
let missed = 0; 
let selectedPhrase = [];
let letterFound;

//Function: gets random number from 0  UP TO the max value
function randomNumber(max) {
    const number = Math.floor(Math.random() * max)
    return number;
};

function getRandomPhraseAsArray (arr) {
    // choose a phrase randomly 
    const randomPhrase = arr[randomNumber(arr.length)];
    //splits the phrase into characters and collects into a new arr 
    newArr = randomPhrase.split("");
    return newArr;
};

function addPhraseToDisplay(arrOfCharacters) {
    // loops through an array of characters
    for (let i = 0; i < arrOfCharacters.length; i ++) {
        // create a list item, put the character inside of the list item
        let listItem = document.createElement('li');
        listItem.textContent = arrOfCharacters[i];
        // added the class letter if charater is not space
        if(listItem.textContent !== ' ') {
            listItem.classList.add('letter');
        } else {
            listItem.classList.add('space');
        }
        // append list item to #phrase ul
        phrase.append(listItem);
    }
};

selectedPhrase= getRandomPhraseAsArray(phrases);
addPhraseToDisplay(selectedPhrase);

function checkLetter(buttonClicked){
    const letterList = document.querySelectorAll('li.letter');
    let lettterMatch = null;
    for (let i=0; i < letterList.length; i++){
        letter = letterList[i];
        letterCase = letter.textContent.toLowerCase();
        
        if(letterCase == buttonClicked.textContent) {
            letter.classList.add("show");
            lettterMatch = letterCase;
      }
    }
    return lettterMatch;
  }


overlay.addEventListener('click', (e) => {
    if (e.target.className === 'btn__reset'){
        e.target.parentNode.style.display = 'none';
    }
});

qwerty.addEventListener('click', (e) => {
    //only allow button click events
    if (e.target.tagName === 'BUTTON') {
        button = event.target
        //adds class name 'chosen'
        button.classList.add('chosen');
        //does not allow button to be clicked twice
        button.disabled = true;
        //calles check letter function, stores it in letter found var
        letterFound = checkLetter(button);
    }
});

