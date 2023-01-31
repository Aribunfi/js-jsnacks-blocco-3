// Snack2
// Crea un array vuoto
// e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const arrayUserNumbers = [];

let sumUserNumbers = 0;

while (sumUserNumbers < 50) {
    const userNumber = parseInt(prompt("Inserisci un numero"));
    arrayUserNumbers.push(userNumber);
    sumUserNumbers += userNumber;
}

console.log(arrayUserNumbers);
console.log(sumUserNumbers);