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

//Function: gets random number from 0  UP TO the max value
function randomNumber(max) {
    const number = Math.floor(Math.random() * max)
    return number;
};

function getRandomPhraseAsArray (arr) {
    // choose a phrase randomly 
    const selectedPhrase = arr[randomNumber(arr.length)];
    //splits the phrase into characters and collects into a new arr 
    newArr = selectedPhrase.split("");
    return newArr;
};


getRandomPhraseAsArray(phrases);


overlay.addEventListener('click', (e) => {
    if (e.target.className === 'btn__reset'){
        e.target.parentNode.style.display = 'none';
    }
});
