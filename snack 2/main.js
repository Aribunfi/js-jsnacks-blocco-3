// Snack2
// Crea un array vuoto
// e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let n = [9,5,4,3,7];
let x = n;
n = [];
console.log(x);


const userNumber = prompt("Scrivi un numero");

for (i = 0; i < 50; i++) {
    n.push(userNumber);
    console.log(userNumber);


}
