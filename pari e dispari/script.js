//? 1. Recupero elementi dal DOM

const formField = document.getElementById('form');
const evenForm = document.getElementById('even');
const oddForm = document.getElementById('odd');
const formNumber = document.getElementById('quantity');

const pcResultParagraph = document.getElementById('pc-result');
const finalResultParagraph = document.getElementById('final-result');


//? 2. Aggiungo event listener

formField.addEventListener('submit', function (e) {
    e.preventDefault();

    // 3. Funzione per generare numero casuale da 1 a 5 per il pc
    function getRandomNumber() {
        return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    };
    const randomNumber = getRandomNumber();

    // Richiamo il numero casuale del pc
    getRandomNumber();
    console.log(randomNumber);

    // Recupero il valore del numero scelto dall'utente
    const userNumber = parseInt(formNumber.value);

    // Sommo il numero scelto dall'utente con il numero casuale del pc
    const sum = userNumber + randomNumber;
    console.log(sum);


    //! Funzione per determinare se l'utente ha scelto pari o dispari
    function getChoice() {
        const choice = document.querySelectorAll('input[name="choice"]:checked').value;

        console.log(choice);
    };


    // Determino il risultato
    let message = '';

    if (sum % 2 === 0 && evenForm) {
        message = 'Congratulazioni, hai vinto'
    } else {
        message = 'Spiacente, ha vinto il pc'
    };





});


