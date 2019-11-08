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
selectedPhrase= getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arrOfCharacters) {
    // loops through an array of characters
    for (let i = 0; i < arrOfCharacters.length; i ++) {
        // create a list item, put the character inside of the list item
        const listItem = document.createElement('li');
        listItem.innerHTML = arrOfCharacters[i];
        // added the class letter if charater is not space
        if(listItem.innerHTML !== ' ') {
            listItem.className = 'letter';
        } 
        // append list item to #phrase ul
        phrase.append(listItem);
    }
};

addPhraseToDisplay(selectedPhrase);

function checkLetter(button) {
    //get all elements with class letter
    letter = document.querySelectorAll('.letter');
    //checks if button press matches any letter
    for ( let i = 0; i < letter.length; i ++) {
        console.log(letter[i].className)
        if (button.textContent === letter[i].textContent) {
            letter[i].className += 'show'
            let matchingLetter = letter[i].textContent;
            return matchingLetter;
        } else {
            return null
        }    
    }
}



overlay.addEventListener('click', (e) => {
    if (e.target.className === 'btn__reset'){
        e.target.parentNode.style.display = 'none';
    }
});
