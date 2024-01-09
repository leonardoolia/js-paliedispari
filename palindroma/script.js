//? 1. Recupero gli elementi dal DOM
const formField = document.getElementById('form');
const inputField = document.getElementById('input');
const paragraph = document.getElementById('paragrafo');


//? 2. Creo event listener
formField.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputValue = inputField.value.trim();




});