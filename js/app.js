const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase ul');
const overlay = document.querySelector('#overlay');
const hearts = document.querySelectorAll('li.tries img');

const overlayButton = overlay.querySelector("a");
const overlayTitle = overlay.querySelector(".title");

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

 
let missed = 0; 
let selectedPhrase = [];
let letterFound;


/*===========================
--------Functions------------          
============================*/

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

function checkLetter(buttonClicked){
    // gets all elements with class of letter 
    const letterList = document.querySelectorAll('.letter');
    //if not match returns null
    let lettterMatch = null;
    for (let i=0; i < letterList.length; i++){
        letter = letterList[i];
        letterCase = letter.textContent.toLowerCase();
        
        if(letterCase == buttonClicked.textContent) {
            // if match adds 'show'class 
            letter.classList.add("show");
            // returns the letter 
            lettterMatch = letterCase;
      }
    }
    return lettterMatch;
  }

function checkWrongGuesses(returnedValue) {
      //checks if guess is wrong
      if (returnedValue === null ) {
          //changes the img of the live heart to a lost heart
          hearts[missed].src = 'images/lostHeart.png';
          missed ++;
      }
  }
//shows the overlay and changes its button and title contents
function changeOverlay(winLose, btnMsg, overTitle) {
    overlay.style.display = "flex";
    overlay.className = winLose;
    overlayButton.textContent = btnMsg;
    overlayTitle.textContent = overTitle;
  }

function removeClass(itemclass) {
    let arr = document.querySelectorAll(`.${itemclass}`);
    for( i = 0; i < arr.length; i ++) {
        arr[i].disabled = false
        arr[i].classList.remove(`${itemclass}`);
    }
}

  function checkWin() {
      let letterLen = document.querySelectorAll('.letter').length
      let correctGuessLen = document.querySelectorAll('.show').length
      if (letterLen === correctGuessLen) {
          changeOverlay('win', "Play again?", "Congratulations You Win!");
      } else if ( missed >= 5) {
        changeOverlay('lose', "Try Again?", "Oh No You Lost! Better Luck Next Time!");
      }
  }

function reset() {
    //removes the phrase from the display
    while (phrase.firstChild) {
        phrase.removeChild(phrase.firstChild);
      }
    //removes the class and enables buttons
    removeClass('chosen');
    removeClass('show');
    //resets all hearts 
    for( i = 0; i < hearts.length; i ++) {
        hearts[i].src = 'images/liveHeart.png';
    }
    //resets the misses 
    missed = 0
    //gets random phrase and adds it to the display
    selectedPhrase= getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(selectedPhrase);

}


/*===========================
-------Event Listeners-------          
============================*/

overlay.addEventListener('click', (e) => {
    if (e.target.className === 'btn__reset'){
        overlay.style.display = 'none';
        reset();
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
        //check missed guesss
        checkWrongGuesses(letterFound);
        checkWin();
    }
});

