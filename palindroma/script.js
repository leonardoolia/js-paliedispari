//? 1. Recupero gli elementi dal DOM
const formField = document.getElementById('form');
const inputField = document.getElementById('input');
const paragraph = document.getElementById('paragrafo');


//? 2. Creo event listener
formField.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputValue = inputField.value.trim();


    //? 3. Creo funzione
    /** JSDOC Syntax
     * Funzione per invertire una parola
     * @param {string} word la parola da invertire
     * @returns {string} la parola inverita
     */

    function getReverseWord(word) {
        let reversedWord = '';

        for (let i = inputValue.length - 1; i >= 0; i--) {
            reversedWord += inputValue[i];
        };

        return reversedWord;
    };
    const result = getReverseWord(inputValue);


    //? 4. Controllo se la parola è palindroma e la stampo
    let message = '';

    if (inputValue === result) {
        message = 'La parola è palindroma';
    } else {
        message = 'La parola non è palindroma'
    };
    paragraph.innerText = message;

});