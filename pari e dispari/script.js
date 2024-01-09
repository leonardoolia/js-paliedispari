//? 1. Recupero elementi dal DOM

const formField = document.getElementById('form');
const formNumber = document.getElementById('quantity');

const pcResultParagraph = document.getElementById('pc-result');
const sumParagraph = document.getElementById('sum');
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


    //! Determinare se l'utente ha scelto pari o dispari

    const choice = document.querySelector('input[name="choice"]:checked').value;
    console.log(choice);



    // Determino il risultato
    let message = '';

    if (sum % 2 === 0 && choice === 'even') {
        message = 'Congratulazioni, hai vinto'
    } else if (sum % 2 !== 0 && choice === 'odd') {
        message = 'Congratulazioni, hai vinto'
    } else {
        message = 'Spiacente, hai perso'
    };



    // Stampo in pagina

    pcResultParagraph.innerHTML = `Numero del pc: ${randomNumber}`;
    sumParagraph.innerHTML = `La somma è: ${sum}`;
    finalResultParagraph.innerHTML = `<strong>${message}</strong>`;

});


