// Snack3
// Fai inserire un numero, che chiameremo N, all'utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

const n = parseInt(prompt("Inserisci pure un numero N"));

let i = 0;

while (i < n) {
    const generatedArray = [];

    let y = 0;

    while (y < 10) {
        const randomNumber = Math.floor(Math.random()*100) +1;

        generatedArray.push(randomNumber);
        y++
    }
    
i++
}

console.log(generatedArray);