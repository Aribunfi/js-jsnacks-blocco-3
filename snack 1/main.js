// Snack1
// Ottieni un numero casuale in un range specificato.
// Chiedi all'utente il valore minimo ed il valore massimo del range in cui generare il numero.



const min = parseInt(prompt("Inserisci il numero più piccolo"));
const max = parseInt(prompt("Inserisci il numero più alto"));

const randomNumber = Math.floor(Math.random() *(max-min+1)) + min;

