const form = document.querySelector('.input-container');
const input = document.querySelector('#email-text');
const button = document.querySelector('#btn');
const dismissButton = document.querySelector('#dismiss');
const errorMessage = document.querySelector('#error');
const firstCard = document.querySelector('.start');
const secondCard = document.querySelector('.end');


button.addEventListener('click', validFunc);
dismissButton.addEventListener('click', dismissing);
function validFunc(e) {
    e.preventDefault();

    const inputValue = input.value.trim();
    console.log(inputValue);

    if (inputValue === "" || !isEmail(inputValue)) {
        input.classList.add('place');
        errorMessage.style.visibility = 'visible';
        input.style.backgroundColor = 'hsl(5, 75%, 86%)';
    }
    else {
        input.classList.remove('place');
        errorMessage.style.visibility = 'hidden';
        input.style.backgroundColor = '';
        secondCard.style.display = 'block';
        firstCard.style.display = 'none';
    }
}

function dismissing(e) {
    e.preventDefault();

    secondCard.style.display = 'none';
    firstCard.style.display = 'flex';

}


function isEmail(input) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}