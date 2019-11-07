const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
// Missed is the life counter 
let missed = 0; 

overlay.addEventListener('click', (e) => {
    if (e.target.className === 'btn__reset'){
        e.target.parentNode.style.display = 'none';
    }
});